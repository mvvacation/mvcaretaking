import { test, expect } from "@playwright/test";

test.describe("No fake data anywhere on site", () => {
  const fakeCaretakerNames = [
    "Vineyard Home Watch",
    "Island Estate Care",
    "MV Coastal Caretaking",
    "Oak Bluffs Property Services",
    "Green Island Caretakers",
    "MV Guardian Services",
  ];

  const fakePhoneNumbers = [
    "(508) 555-0101",
    "(508) 555-0202",
    "(508) 555-0303",
    "(508) 555-0404",
    "(508) 555-0505",
    "(508) 555-0606",
  ];

  const fakeEmails = [
    "info@vineyardhomewatch.com",
    "hello@islandestatecare.com",
    "info@mvcoastal.com",
    "contact@obpropertyservices.com",
    "hello@greenislandmv.com",
    "info@mvguardian.com",
  ];

  const pagesToCheck = [
    "/",
    "/caretakers",
    "/services",
    "/cost-guide",
    "/how-it-works",
    "/blog",
    "/faq",
    "/towns/edgartown",
    "/towns/chilmark",
    "/towns/oak-bluffs",
  ];

  for (const path of pagesToCheck) {
    test(`${path} has no fake caretaker names`, async ({ page }) => {
      await page.goto(path);
      const body = await page.textContent("body");
      for (const name of fakeCaretakerNames) {
        expect(body).not.toContain(name);
      }
    });

    test(`${path} has no fake phone numbers`, async ({ page }) => {
      await page.goto(path);
      const body = await page.textContent("body");
      for (const phone of fakePhoneNumbers) {
        expect(body).not.toContain(phone);
      }
    });

    test(`${path} has no fake emails`, async ({ page }) => {
      await page.goto(path);
      const body = await page.textContent("body");
      for (const email of fakeEmails) {
        expect(body).not.toContain(email);
      }
    });
  }

  test("town pages have no fake average sale prices", async ({ page }) => {
    const townPages = [
      { path: "/towns/edgartown", fakePrice: "$3,557,847" },
      { path: "/towns/oak-bluffs", fakePrice: "$1,200,000" },
      { path: "/towns/vineyard-haven", fakePrice: "$1,750,000" },
      { path: "/towns/chilmark", fakePrice: "$6,435,368" },
      { path: "/towns/west-tisbury", fakePrice: "$2,500,000" },
      { path: "/towns/aquinnah", fakePrice: "$2,500,000" },
    ];
    for (const { path, fakePrice } of townPages) {
      await page.goto(path);
      const body = await page.textContent("body");
      expect(body).not.toContain(fakePrice);
      expect(body).not.toContain("Avg. Sale Price");
    }
  });
});
