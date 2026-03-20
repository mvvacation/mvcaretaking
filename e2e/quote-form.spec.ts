import { test, expect } from "@playwright/test";

test.describe("Get a Quote form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/get-a-quote");
  });

  test("form has all required fields", async ({ page }) => {
    await expect(page.getByLabel(/First Name/i)).toBeVisible();
    await expect(page.getByLabel(/Last Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Phone/i)).toBeVisible();
    await expect(page.getByLabel(/Town/i)).toBeVisible();
    await expect(page.getByLabel(/Property Type/i)).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    const submitBtn = page.getByRole("button", { name: /Submit/i });
    await submitBtn.click();

    // HTML5 validation should prevent submission — first name is required
    const firstName = page.getByLabel(/First Name/i);
    const validationMessage = await firstName.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(validationMessage).toBeTruthy();
  });

  test("email field validates format", async ({ page }) => {
    const emailField = page.getByLabel(/Email/i);
    await emailField.fill("not-an-email");
    await emailField.blur();

    // Check the HTML5 validity
    const isValid = await emailField.evaluate(
      (el: HTMLInputElement) => el.validity.valid
    );
    expect(isValid).toBe(false);
  });

  test("town dropdown has all 6 MV towns", async ({ page }) => {
    const townSelect = page.getByLabel(/Town/i);
    await expect(townSelect).toBeVisible();
    const options = townSelect.locator("option");
    // 6 towns + 1 placeholder = at minimum 7
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
    const town = page.getByLabel(/Town/i);
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

  test("service checkboxes toggle correctly", async ({ page }) => {
    const checkbox = page.getByRole("checkbox").first();
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
});
