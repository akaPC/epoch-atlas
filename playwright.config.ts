import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';

/** Cloud sandboxes ship Chromium here and block the Playwright CDN; use it when present. */
const PRESET_CHROMIUM = '/opt/pw-browsers/chromium';

const PORT = 4173;
export const BASE_URL = `http://localhost:${PORT}/epoch-atlas/`;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'list' : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    ...devices['Desktop Chrome'],
    launchOptions: existsSync(PRESET_CHROMIUM) ? { executablePath: PRESET_CHROMIUM } : {},
  },
  webServer: {
    command: `npm run preview -- --port ${PORT} --strictPort`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
