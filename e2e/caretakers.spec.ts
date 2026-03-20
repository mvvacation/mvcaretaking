import { test, expect } from "@playwright/test";

test.describe("Caretakers page (no fake data)", () => {
  test("shows directory launching soon message", async ({ page }) => {
    await page.goto("/caretakers");
    await expect(
      page.getByText("Directory Launching Soon")
    ).toBeVisible();
  });

  test("has CTA to get matched", async ({ page }) => {
    await page.goto("/caretakers");
    await expect(
      page.getByRole("link", { name: /Get Matched With a Caretaker/i })
    ).toBeVisible();
  });

  test("shows verification standards", async ({ page }) => {
    await page.goto("/caretakers");
    await expect(page.getByText("Bonded & Insured")).toBeVisible();
    await expect(page.getByText("NHWA Standards")).toBeVisible();
    await expect(page.getByText("Year-Round Residency")).toBeVisible();
    await expect(page.getByText("Digital Reporting")).toBeVisible();
  });

  test("lists all 6 MV towns", async ({ page }) => {
    await page.goto("/caretakers");
    const main = page.locator("#main");
    await expect(main.getByRole("link", { name: "Edgartown" })).toBeVisible();
    await expect(main.getByRole("link", { name: "Oak Bluffs" })).toBeVisible();
    await expect(main.getByRole("link", { name: "Vineyard Haven" })).toBeVisible();
    await expect(main.getByRole("link", { name: "Chilmark" })).toBeVisible();
    await expect(main.getByRole("link", { name: "West Tisbury" })).toBeVisible();
    await expect(main.getByRole("link", { name: "Aquinnah" })).toBeVisible();
  });

  test("lists all 8 service categories", async ({ page }) => {
    await page.goto("/caretakers");
    await expect(page.getByText("Property Inspections")).toBeVisible();
    await expect(page.getByText("Storm & Emergency Response")).toBeVisible();
    await expect(page.getByText("Seasonal Opening & Closing")).toBeVisible();
    await expect(page.getByText("Security Monitoring")).toBeVisible();
  });

  test("no fake caretaker names or 555 numbers on page", async ({ page }) => {
    await page.goto("/caretakers");
    const body = await page.textContent("body");
    expect(body).not.toContain("Vineyard Home Watch");
    expect(body).not.toContain("Island Estate Care");
    expect(body).not.toContain("MV Coastal Caretaking");
    expect(body).not.toContain("(508) 555-");
    expect(body).not.toContain("vineyardhomewatch.com");
  });

  test("has apply CTA for caretakers", async ({ page }) => {
    await page.goto("/caretakers");
    await expect(
      page.getByText(/Are You a Martha's Vineyard Caretaker/i)
    ).toBeVisible();
  });

  test("old caretaker profile URLs return 404", async ({ page }) => {
    const response = await page.goto("/caretakers/vineyard-home-watch");
    expect(response?.status()).toBe(404);
  });
});
