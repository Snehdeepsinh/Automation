// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium', // Change to 'webkit' for WebKit browser
    headless: false,
    screenshot: 'on',
    trace: 'on',
    acceptDownloads: true, // Enable downloads
    viewport: null, // Disable default viewport to maximize window
    launchOptions: {
      args: ['--start-maximized'], // Maximize window for Chromium
    },
  },
});
