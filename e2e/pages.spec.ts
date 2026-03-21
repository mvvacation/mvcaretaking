import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", titlePattern: /MVCaretaking/ },
  { path: "/services", titlePattern: /Services/i },
  { path: "/caretakers", titlePattern: /Caretaker Directory/i },
  { path: "/cost-guide", titlePattern: /Cost/i },
  { path: "/how-it-works", titlePattern: /How It Works/i },
  { path: "/blog", titlePattern: /Blog/i },
  { path: "/faq", titlePattern: /FAQ/i },
  { path: "/get-a-quote", titlePattern: /Quote/i },
  { path: "/maintenance-calendar", titlePattern: /Maintenance/i },
  { path: "/what-is-a-caretaker", titlePattern: /Caretaker/i },
  { path: "/privacy", titlePattern: /Privacy/i },
  { path: "/terms", titlePattern: /Terms/i },
  { path: "/thank-you", titlePattern: /Thank/i },
  { path: "/about", titlePattern: /About/i },
];

for (const { path, titlePattern } of pages) {
  test(`${path} loads without errors`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(titlePattern);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test.describe("Town pages", () => {
  const towns = [
    { slug: "edgartown", name: "Edgartown" },
    { slug: "oak-bluffs", name: "Oak Bluffs" },
    { slug: "vineyard-haven", name: "Vineyard Haven" },
    { slug: "chilmark", name: "Chilmark" },
    { slug: "west-tisbury", name: "West Tisbury" },
    { slug: "aquinnah", name: "Aquinnah" },
  ];

  for (const { slug, name } of towns) {
    test(`/towns/${slug} loads correctly`, async ({ page }) => {
      const response = await page.goto(`/towns/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(new RegExp(name, "i"));
      await expect(
        page.getByRole("heading", { level: 1, name: new RegExp(name, "i") })
      ).toBeVisible();
    });

    test(`/towns/${slug} has no fake price data`, async ({ page }) => {
      await page.goto(`/towns/${slug}`);
      await expect(page.getByText("Avg. Sale Price")).not.toBeVisible();
      await expect(page.getByText("Price Range")).not.toBeVisible();
      await expect(page.getByText("Active Caretakers")).not.toBeVisible();
    });

    test(`/towns/${slug} has CTA to get matched`, async ({ page }) => {
      await page.goto(`/towns/${slug}`);
      await expect(
        page.getByRole("link", { name: /Get Matched Free/i })
      ).toBeVisible();
    });
  }
});

test.describe("Blog pages", () => {
  const blogSlugs = [
    "do-i-need-a-caretaker-marthas-vineyard",
    "cost-of-caretaking-marthas-vineyard-2026",
    "choosing-the-right-caretaker-mv",
    "insurance-requirements-vacant-mv-homes",
    "winter-storm-prep-marthas-vineyard",
    "seasonal-opening-closing-checklist",
    "mv-second-home-management-guide",
    "mv-str-regulations-2026",
  ];

  for (const slug of blogSlugs) {
    test(`/blog/${slug} loads correctly`, async ({ page }) => {
      const response = await page.goto(`/blog/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test("blog index lists all articles", async ({ page }) => {
    await page.goto("/blog");
    const articles = page.locator("article");
    await expect(articles).toHaveCount(8);
  });

  test("blog articles link from index to detail page", async ({ page }) => {
    await page.goto("/blog");
    await page
      .getByRole("link", { name: /Do I Need a Caretaker/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/blog\/do-i-need-a-caretaker/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
