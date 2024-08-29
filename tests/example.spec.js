import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test("example test", async ({ page }) => {
  await page.goto(process.env.RETOOL_APP_URL);
  await page
    .getByPlaceholder("name@company.com")
    .fill(`${process.env.PLAYWRIGHT_USERNAME}`);
  await page
    .getByPlaceholder("Password")
    .fill(`${process.env.PLAYWRIGHT_PASSWORD}`);
  await page.getByText(/^Sign in$/).click();

  await expect(page.getByText("Form title")).toBeVisible();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("Lawton, Oklahoma, United States").click();
});
