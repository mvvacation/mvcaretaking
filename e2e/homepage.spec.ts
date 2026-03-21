import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with correct title and hero content", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/MVCaretaking/);
    await expect(
      page.getByRole("heading", { level: 1, name: /Your Island Home/i })
    ).toBeVisible();
    await expect(page.getByText(/10,700\+ seasonal homes/i)).toBeVisible();
  });

  test("hero CTA links work", async ({ page }) => {
    await page.goto("/");
    const ctaLink = page.getByRole("link", { name: /Find Your Caretaker/i });
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute("href", "/get-a-quote");
  });

  test("services section is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Property Inspections").first()).toBeVisible();
    await expect(page.getByText("Storm Response").first()).toBeVisible();
    await expect(page.getByText("Seasonal Management").first()).toBeVisible();
  });

  test("how it works steps are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Share Your Property Details")).toBeVisible();
    await expect(page.getByText("Receive Curated Matches")).toBeVisible();
    await expect(page.getByText("Select Your Caretaker")).toBeVisible();
  });

  test("market data section shows real stats", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("10,700+").first()).toBeVisible();
    await expect(page.getByText("$2,626,357").first()).toBeVisible();
    await expect(page.getByText("4,000+").first()).toBeVisible();
  });

  test("no fake caretaker profiles are shown", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Vineyard Home Watch")).not.toBeVisible();
    await expect(page.getByText("Island Estate Care")).not.toBeVisible();
    await expect(page.getByText("MV Coastal Caretaking")).not.toBeVisible();
    await expect(page.getByText("(508) 555-")).not.toBeVisible();
  });

  test("no fake testimonials are shown", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("What Homeowners Say")).not.toBeVisible();
    await expect(
      page.getByText("We used to fly down every time")
    ).not.toBeVisible();
  });

  test("trust section is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Why Homeowners Trust Us")).toBeVisible();
    await expect(page.getByText("Bonded & Insured").first()).toBeVisible();
  });

  test("resource links are present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /2026 Cost Guide/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Maintenance Calendar/i }).first()).toBeVisible();
  });

  test("footer CTA email form is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByPlaceholder("Enter your email")).toBeVisible();
    await expect(page.getByRole("button", { name: /Get Matched/i })).toBeVisible();
  });
});
