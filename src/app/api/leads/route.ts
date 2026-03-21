import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { MV_TOWNS } from "@/lib/data";

const VALID_TOWNS = MV_TOWNS.map((t) => t.toLowerCase());

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP
const RATE_LIMIT_CLEANUP_INTERVAL = 5 * 60 * 1000; // cleanup every 5 min
let lastCleanup = Date.now();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Periodic cleanup to prevent memory leak
  if (now - lastCleanup > RATE_LIMIT_CLEANUP_INTERVAL) {
    rateLimitMap.forEach((entry, key) => {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    });
    lastCleanup = now;
  }
  // Soft cap: evict expired entries when approaching limit
  if (rateLimitMap.size > 5000) {
    rateLimitMap.forEach((entry, key) => {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    });
  }
  // Hard cap fallback
  if (rateLimitMap.size > 10000) {
    rateLimitMap.clear();
  }
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Validation helpers
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, maxLen = 1000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen).replace(/[<>]/g, "");
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot field — bots will fill this in, real users won't see it
    if (body.website_url) {
      // Silently accept but discard spam submissions
      return NextResponse.json(
        { success: true, message: "Lead submitted successfully." },
        { status: 201 }
      );
    }

    const firstName = sanitize(body.firstName, 100);
    const lastName = sanitize(body.lastName, 100);
    const email = sanitize(body.email, 254);
    const phone = sanitize(body.phone, 20);
    const town = sanitize(body.town, 50);
    const propertyType = sanitize(body.propertyType, 100);
    const servicesNeeded = sanitize(body.servicesNeeded, 500);
    const message = sanitize(body.message, 2000);
    const howHeard = sanitize(body.howHeard, 200);

    // Validate required fields
    if (!firstName || !lastName || !email || !town) {
      return NextResponse.json(
        { error: "First name, last name, email, and town are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate town against known MV towns
    if (!VALID_TOWNS.includes(town.toLowerCase())) {
      return NextResponse.json(
        { error: "Please select a valid Martha's Vineyard town." },
        { status: 400 }
      );
    }

    // Save to database
    try {
      await getDb().insert(leads).values({
        firstName,
        lastName,
        email,
        phone,
        town,
        propertyType,
        servicesNeeded,
        message,
        howHeard,
      });
    } catch {
      return NextResponse.json(
        { error: "Unable to process your request. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
