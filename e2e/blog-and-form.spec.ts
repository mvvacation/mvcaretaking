import { test, expect } from "@playwright/test";

test.describe("Blog article rendering", () => {
  test("renders full article content with headings", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    // Should have rendered h2 headings from markdown content
    const h2s = page.locator("h2").filter({ hasNotText: /Need a Caretaker|Read Next/ });
    const count = await h2s.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("shows reading time and author", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    // Use first() since related articles also show "min read"
    await expect(page.getByText(/min read/).first()).toBeVisible();
    await expect(page.getByText(/MVCaretaking Team/).first()).toBeVisible();
  });

  test("shows related articles section", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    await expect(page.getByRole("heading", { name: /Read Next/ })).toBeVisible();
    const relatedLinks = page.locator("a[href^='/blog/']").filter({ hasNotText: /Blog|← Back/ });
    const count = await relatedLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("shows CTA in blog article", async ({ page }) => {
    await page.goto("/blog/cost-of-caretaking-marthas-vineyard-2026");
    await expect(page.getByRole("link", { name: /Get a Free Quote/ })).toBeVisible();
  });

  test("renders bold text in paragraphs", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    const strongs = page.locator("article strong, section strong");
    const count = await strongs.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("renders list items", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    const listItems = page.locator("article li, section li");
    const count = await listItems.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("has article JSON-LD with correct type", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    const jsonLdElements = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdElements.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Find the Article JSON-LD (not LocalBusiness from layout or BreadcrumbList)
    let foundArticle = false;
    for (let i = 0; i < count; i++) {
      const content = await jsonLdElements.nth(i).textContent();
      const parsed = JSON.parse(content!);
      if (parsed["@type"] === "Article") {
        expect(parsed.headline).toBeTruthy();
        expect(parsed.wordCount).toBeGreaterThan(0);
        foundArticle = true;
        break;
      }
    }
    expect(foundArticle).toBe(true);
  });

  test("blog dates are in the past", async ({ page }) => {
    await page.goto("/blog");
    const timeElements = page.locator("time[datetime]");
    const count = await timeElements.count();
    const now = new Date();
    for (let i = 0; i < count; i++) {
      const dt = await timeElements.nth(i).getAttribute("datetime");
      if (dt) {
        const d = new Date(dt);
        expect(d.getTime()).toBeLessThan(now.getTime());
      }
    }
  });
});

test.describe("Form submission flow", () => {
  test("successful submission redirects to thank you page", async ({ page }) => {
    await page.goto("/get-a-quote");

    const form = page.locator("form");
    // Step 0: Contact info
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await form.getByLabel(/Phone/i).fill("508-555-0100");
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 1: Property details
    await form.getByLabel(/Town/i).selectOption("Edgartown");
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 2: Services — skip, continue
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 3: Additional details
    await form.getByLabel(/Tell us more/i).fill("Testing form submission");

    // Intercept the API call to avoid DB dependency
    await page.route("**/api/leads", (route) => {
      route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "Lead submitted successfully." }),
      });
    });

    await form.getByRole("button", { name: /Submit|Send|Get Matched/i }).click();

    // Should redirect to thank-you page
    await page.waitForURL("**/thank-you", { timeout: 10000 });
    await expect(page).toHaveURL(/thank-you/);
  });

  test("shows error on failed submission", async ({ page }) => {
    await page.goto("/get-a-quote");

    const form = page.locator("form");
    // Step 0
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 1
    await form.getByLabel(/Town/i).selectOption("Edgartown");
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 2: Skip
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 3: Submit
    // Intercept the API call to simulate error
    await page.route("**/api/leads", (route) => {
      route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Server error" }),
      });
    });

    await form.getByRole("button", { name: /Submit|Send|Get Matched/i }).click();

    // Should show error message on the page
    await expect(page.getByText(/Server error|Something went wrong|Failed to submit/i)).toBeVisible({ timeout: 10000 });
  });
});
