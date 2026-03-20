import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("header navigation links are present", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Caretakers" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Cost Guide" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "How It Works" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Resources" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "FAQ" })).toBeVisible();
  });

  test("logo links to homepage", async ({ page }) => {
    await page.goto("/services");
    await page.getByRole("link", { name: /MVCaretaking/i }).first().click();
    await expect(page).toHaveURL("/");
  });

  test("navigation to services page works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL("/services");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("navigation to caretakers page works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "Caretakers" }).click();
    await expect(page).toHaveURL("/caretakers");
    await expect(
      page.getByRole("heading", { name: /Caretaker Directory/i })
    ).toBeVisible();
  });

  test("navigation to cost guide works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "Cost Guide" }).click();
    await expect(page).toHaveURL("/cost-guide");
  });

  test("navigation to FAQ works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "FAQ" }).click();
    await expect(page).toHaveURL("/faq");
  });

  test("get a quote CTA in header works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Get a Quote/i }).first().click();
    await expect(page).toHaveURL("/get-a-quote");
  });

  test("skip to content link exists", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.getByRole("link", { name: /Skip to content/i });
    await expect(skipLink).toBeAttached();
  });

  test("active page has aria-current attribute", async ({ page }) => {
    await page.goto("/services");
    const navLink = page
      .getByRole("navigation")
      .getByRole("link", { name: "Services" })
      .first();
    await expect(navLink).toHaveAttribute("aria-current", "page");
  });
});

test.describe("Footer", () => {
  test("footer town links are present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "Edgartown" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Chilmark" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Aquinnah" })).toBeVisible();
  });

  test("footer has external links with proper rel attributes", async ({ page }) => {
    await page.goto("/");
    const externalLink = page.locator('footer a[target="_blank"]').first();
    await expect(externalLink).toHaveAttribute("rel", /noopener/);
  });

  test("footer company links work", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    await expect(footer.getByRole("link", { name: "Get a Quote" })).toHaveAttribute("href", "/get-a-quote");
  });
});
