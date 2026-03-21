import { test, expect } from "@playwright/test";

test.describe("Mobile viewport", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("mobile menu toggle works", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /navigation menu/i });
    await expect(hamburger).toBeVisible();
    // Desktop nav should be hidden
    await expect(page.locator(".hidden.lg\\:flex")).not.toBeVisible();
    await hamburger.click();
    const mobileNav = page.getByRole("navigation", { name: /Mobile/i });
    await expect(mobileNav).toBeVisible();
  });

  test("mobile menu closes on escape", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /navigation menu/i });
    await hamburger.click();
    const mobileNav = page.getByRole("navigation", { name: /Mobile/i });
    await expect(mobileNav).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(mobileNav).not.toBeVisible();
  });

  test("mobile menu has all navigation links", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /navigation menu/i });
    await hamburger.click();
    const mobileNav = page.getByRole("navigation", { name: /Mobile/i });
    await expect(mobileNav.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Caretakers" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Cost Guide" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "How It Works" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Resources" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "FAQ" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /Get a Quote/i })).toBeVisible();
  });

  test("mobile navigation to services works", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /navigation menu/i });
    await hamburger.click();
    const mobileNav = page.getByRole("navigation", { name: /Mobile/i });
    await mobileNav.getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL("/services");
  });

  test("homepage hero is readable on mobile", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("get-a-quote form is usable on mobile", async ({ page }) => {
    await page.goto("/get-a-quote");
    await expect(page.getByLabel(/First Name/i)).toBeVisible();
    // Multi-step form: step 0 shows Continue, not Submit
    await expect(page.getByRole("button", { name: /Continue/i })).toBeVisible();
  });

  test("footer is accessible on mobile", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer[aria-label='Site footer']");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
    await expect(footer.getByRole("link", { name: "Services" })).toBeVisible();
  });

  test("404 page shows suggestions on mobile", async ({ page }) => {
    await page.goto("/nonexistent-page-12345");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Services" }).first()).toBeVisible();
  });
});

test.describe("Tablet viewport", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("tablet renders homepage correctly", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("tablet renders services page correctly", async ({ page }) => {
    await page.goto("/services");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("tablet renders cost guide correctly", async ({ page }) => {
    await page.goto("/cost-guide");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
