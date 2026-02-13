import { test, expect } from '@playwright/test';
import { getEnv } from './utils/env';

test('homepage loads', async ({ page }) => {
  const url = getEnv("URL");
  const username = getEnv("USERNAME");
  const password = getEnv("PASSWORD");

  await page.goto(url);
  expect(page.getByRole("heading",{name:"Login"})).toBeVisible();
  await page.getByTestId("name").fill(username);
  await page.getByTestId("password").fill(password);
  await page.getByTestId("submit").click();
  expect(page.getByRole("heading",{name:"Mein Sky auf einen Blick"})).toBeVisible();
  console.log("URL: "+ url);
});
