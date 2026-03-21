import { test, expect } from "@playwright/test";

test.describe("Get a Quote form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/get-a-quote");
  });

  test("form has all required fields", async ({ page }) => {
    const form = page.locator("form");
    // Step 0: Contact info
    await expect(form.getByLabel(/First Name/i)).toBeVisible();
    await expect(form.getByLabel(/Last Name/i)).toBeVisible();
    await expect(form.getByLabel(/Email/i)).toBeVisible();
    await expect(form.getByLabel(/Phone/i)).toBeVisible();

    // Fill step 0 and advance
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Continue/i }).click();

    // Step 1: Property details
    await expect(form.getByLabel(/Town/i)).toBeVisible();
    await expect(form.getByLabel(/Property Type/i)).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    // On step 0, Continue should be disabled without required fields
    const continueBtn = page.getByRole("button", { name: /Continue/i });
    await expect(continueBtn).toBeDisabled();

    // Should still be on step 0 — fields are still visible
    await expect(page.getByLabel(/First Name/i)).toBeVisible();
  });

  test("email field validates format", async ({ page }) => {
    const emailField = page.getByLabel(/Email/i);
    await emailField.fill("not-an-email");
    await emailField.blur();

    const isValid = await emailField.evaluate(
      (el: HTMLInputElement) => el.validity.valid
    );
    expect(isValid).toBe(false);
  });

  test("town dropdown has all 6 MV towns", async ({ page }) => {
    // Navigate to step 1
    const form = page.locator("form");
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Continue/i }).click();

    const townSelect = form.getByLabel(/Town/i);
    await expect(townSelect).toBeVisible();
    const options = townSelect.locator("option");
    const count = await options.count();
    expect(count).toBeGreaterThanOrEqual(7);
  });

  test("honeypot field is hidden", async ({ page }) => {
    const honeypot = page.locator('input[name="website_url"]');
    await expect(honeypot).toHaveAttribute("aria-hidden", "true");
    await expect(honeypot).toHaveAttribute("tabindex", "-1");
  });

  test("page has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Quote/i);
  });

  test("shows error when firstName is empty after blur", async ({ page }) => {
    const firstName = page.getByLabel(/First Name/i);
    await firstName.focus();
    await firstName.blur();
    await expect(page.getByText("First name is required")).toBeVisible();
  });

  test("shows error when email is invalid after blur", async ({ page }) => {
    const email = page.getByLabel(/Email/i);
    await email.fill("not-an-email");
    await email.blur();
    await expect(page.getByText("Please enter a valid email")).toBeVisible();
  });

  test("shows error when town is empty after blur", async ({ page }) => {
    // Navigate to step 1
    const form = page.locator("form");
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Continue/i }).click();

    const town = form.getByLabel(/Town/i);
    await town.focus();
    await town.blur();
    await expect(page.getByText("Please select a town")).toBeVisible();
  });

  test("error clears when valid value is entered", async ({ page }) => {
    const firstName = page.getByLabel(/First Name/i);
    await firstName.focus();
    await firstName.blur();
    await expect(page.getByText("First name is required")).toBeVisible();
    await firstName.fill("John");
    await firstName.blur();
    await expect(page.getByText("First name is required")).not.toBeVisible();
  });

  test("shows error when phone has invalid characters", async ({ page }) => {
    const phone = page.getByLabel(/Phone/i);
    await phone.fill("abc");
    await phone.blur();
    await expect(page.getByText("Please enter a valid phone number")).toBeVisible();
  });

  test("service checkboxes toggle correctly", async ({ page }) => {
    // Navigate to step 2 (services)
    const form = page.locator("form");
    await form.getByLabel(/First Name/i).fill("Test");
    await form.getByLabel(/Last Name/i).fill("User");
    await form.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Continue/i }).click();

    await form.getByLabel(/Town/i).selectOption("Edgartown");
    await page.getByRole("button", { name: /Continue/i }).click();

    const checkbox = page.getByRole("checkbox").first();
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
});
