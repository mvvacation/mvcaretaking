import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { leads } from "@/lib/db/schema";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
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

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 1000);
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

    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const town = sanitize(body.town);
    const propertyType = sanitize(body.propertyType);
    const servicesNeeded = sanitize(body.servicesNeeded);
    const message = sanitize(body.message);
    const howHeard = sanitize(body.howHeard);

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

    // Save to database
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

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[API /api/leads] Error:", err);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
