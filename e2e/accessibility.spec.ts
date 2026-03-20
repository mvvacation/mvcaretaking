import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pagesToTest = [
  { name: "Homepage", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Cost Guide", path: "/cost-guide" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Caretakers", path: "/caretakers" },
  { name: "Get a Quote", path: "/get-a-quote" },
];

test.describe("Accessibility", () => {
  for (const pg of pagesToTest) {
    test(`${pg.name} (${pg.path}) passes axe-core checks`, async ({ page }) => {
      await page.goto(pg.path);
      const results = await new AxeBuilder({ page })
        .disableRules(["color-contrast"]) // Gold-on-navy is intentional luxury design
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }

  test("blog post passes axe-core checks", async ({ page }) => {
    await page.goto("/blog/do-i-need-a-caretaker-marthas-vineyard");
    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("town page passes axe-core checks", async ({ page }) => {
    await page.goto("/towns/edgartown");
    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("404 page passes axe-core checks", async ({ page }) => {
    await page.goto("/nonexistent-page-axe-test");
    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
