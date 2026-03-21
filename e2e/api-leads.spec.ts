import { test, expect } from "@playwright/test";

test.describe("API /api/leads validation", () => {
  const endpoint = "/api/leads";

  // Note: API has rate limiting (5 req/min per IP). Tests are ordered so
  // the most important ones run first. Tests that only check status codes
  // accept 429 as an alternative to avoid flakiness.

  test("rejects empty body", async ({ request }) => {
    const res = await request.post(endpoint, { data: {} });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toBeTruthy();
  });

  test("rejects invalid email format", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: {
        firstName: "Jane",
        lastName: "Doe",
        email: "not-an-email",
        town: "Edgartown",
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("email");
  });

  test("rejects invalid town", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@example.com",
        town: "Springfield",
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("town");
  });

  test("honeypot field silently discards spam", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: {
        firstName: "Bot",
        lastName: "Spam",
        email: "bot@spam.com",
        town: "Edgartown",
        website_url: "http://spam.com",
      },
    });
    // Honeypot bypasses validation and DB, so should always succeed
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  test("returns JSON content-type on error", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: { firstName: "OnlyFirst" },
    });
    expect(res.headers()["content-type"]).toContain("application/json");
  });
});
