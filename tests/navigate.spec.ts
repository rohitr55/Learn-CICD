import { test, expect } from '@playwright/test';
import { getEnv } from './utils/env';

test('homepage loads', async ({ page }) => {
  const url = getEnv("URL");
  await page.goto(url);
  console.log("URL: "+ url);
});
