import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  use: {
    headless: true,
    baseURL: "https://example.com", // replace with your app URL
    screenshot: "only-on-failure",
    trace: "on"
  },
  reporter: [["html", { open: "never" }]]
});
