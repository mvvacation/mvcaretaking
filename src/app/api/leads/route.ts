import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
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

// Strip HTML characters for XSS prevention
function stripHtml(val: string): string {
  return val.replace(/[<>]/g, "");
}

// Zod schema for lead form validation
const leadSchema = z.object({
  website_url: z.string().optional(), // honeypot
  firstName: z.string().min(1, "First name is required").max(100).transform(stripHtml),
  lastName: z.string().min(1, "Last name is required").max(100).transform(stripHtml),
  email: z.string().email("Please provide a valid email address").max(254).transform(stripHtml),
  phone: z.string().max(20).transform(stripHtml).optional().default(""),
  town: z.string().min(1, "Town is required").max(50).transform(stripHtml),
  propertyType: z.string().max(100).transform(stripHtml).optional().default(""),
  servicesNeeded: z.string().max(500).transform(stripHtml).optional().default(""),
  message: z.string().max(2000).transform(stripHtml).optional().default(""),
  howHeard: z.string().max(200).transform(stripHtml).optional().default(""),
});

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
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Invalid request data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Honeypot field — bots will fill this in, real users won't see it
    if (data.website_url) {
      // Silently accept but discard spam submissions
      return NextResponse.json(
        { success: true, message: "Lead submitted successfully." },
        { status: 201 }
      );
    }

    // Validate town against known MV towns
    if (!VALID_TOWNS.includes(data.town.toLowerCase())) {
      return NextResponse.json(
        { error: "Please select a valid Martha's Vineyard town." },
        { status: 400 }
      );
    }

    // Save to database
    try {
      await getDb().insert(leads).values({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        town: data.town,
        propertyType: data.propertyType,
        servicesNeeded: data.servicesNeeded,
        message: data.message,
        howHeard: data.howHeard,
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
