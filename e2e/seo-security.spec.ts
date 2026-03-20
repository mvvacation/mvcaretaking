import { test, expect } from "@playwright/test";

test.describe("SEO & Meta", () => {
  test("homepage has canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", "https://mvcaretaking.com");
  });

  test("homepage has OG tags", async ({ page }) => {
    await page.goto("/");
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /MVCaretaking/);
    const ogDesc = page.locator('meta[property="og:description"]');
    await expect(ogDesc).toHaveAttribute("content", /.+/);
  });

  test("homepage has theme-color", async ({ page }) => {
    await page.goto("/");
    const themeColor = page.locator('meta[name="theme-color"]');
    await expect(themeColor).toHaveAttribute("content", "#243b53");
  });

  test("homepage has JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);
    const content = await jsonLd.first().textContent();
    const parsed = JSON.parse(content!);
    expect(parsed["@type"]).toBe("LocalBusiness");
    expect(parsed.name).toBe("MVCaretaking");
  });

  test("blog post has Article JSON-LD", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(2);
    const schemas: Record<string, unknown>[] = [];
    for (let i = 0; i < count; i++) {
      schemas.push(JSON.parse((await jsonLd.nth(i).textContent())!));
    }
    const article = schemas.find((s) => s["@type"] === "Article");
    expect(article).toBeTruthy();
    expect((article as Record<string, unknown>).headline).toBeTruthy();
    const breadcrumb = schemas.find((s) => s["@type"] === "BreadcrumbList");
    expect(breadcrumb).toBeTruthy();
  });

  test("FAQ page has FAQPage JSON-LD", async ({ page }) => {
    await page.goto("/faq");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(2);
    const schemas: Record<string, unknown>[] = [];
    for (let i = 0; i < count; i++) {
      schemas.push(JSON.parse((await jsonLd.nth(i).textContent())!));
    }
    const faqSchema = schemas.find((s) => s["@type"] === "FAQPage");
    expect(faqSchema).toBeTruthy();
  });

  test("town page has Place JSON-LD", async ({ page }) => {
    await page.goto("/towns/edgartown");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(2);
    const schemas: Record<string, unknown>[] = [];
    for (let i = 0; i < count; i++) {
      schemas.push(JSON.parse((await jsonLd.nth(i).textContent())!));
    }
    const place = schemas.find((s) => s["@type"] === "Place");
    expect(place).toBeTruthy();
    expect((place as Record<string, string>).name).toContain("Edgartown");
    const breadcrumb = schemas.find((s) => s["@type"] === "BreadcrumbList");
    expect(breadcrumb).toBeTruthy();
  });

  test("services page has Service JSON-LD", async ({ page }) => {
    await page.goto("/services");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(2);
    const schemas: Record<string, unknown>[] = [];
    for (let i = 0; i < count; i++) {
      schemas.push(JSON.parse((await jsonLd.nth(i).textContent())!));
    }
    const service = schemas.find((s) => s["@type"] === "Service");
    expect(service).toBeTruthy();
    const breadcrumb = schemas.find((s) => s["@type"] === "BreadcrumbList");
    expect(breadcrumb).toBeTruthy();
  });

  test("sitemap is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
    const body = await page.textContent("body");
    expect(body).toContain("https://mvcaretaking.com");
    // No fake caretaker URLs in sitemap
    expect(body).not.toContain("vineyard-home-watch");
    expect(body).not.toContain("island-estate-care");
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
  });

  test("pages have canonical URLs", async ({ page }) => {
    const pagesToCheck = ["/services", "/faq", "/blog", "/cost-guide"];
    for (const path of pagesToCheck) {
      await page.goto(path);
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute("href");
      expect(href).toContain("mvcaretaking.com");
    }
  });
});

test.describe("Security headers", () => {
  test("response has security headers", async ({ page }) => {
    const response = await page.goto("/");
    const headers = response?.headers() || {};
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBeTruthy();
  });
});

test.describe("404 handling", () => {
  test("invalid URL returns 404 page", async ({ page }) => {
    const response = await page.goto("/nonexistent-page");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("old caretaker profile URLs return 404", async ({ page }) => {
    const response = await page.goto("/caretakers/vineyard-home-watch");
    expect(response?.status()).toBe(404);
  });
});
