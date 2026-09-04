import { defineConfig, devices } from '@playwright/test';

const PORT = 4174;
export const BASE_URL = `http://localhost:${PORT}/epoch-atlas/`;

export default defineConfig({
  testDir: 'tests/screenshots',
  timeout: 90_000,
  reporter: 'list',
  workers: 1,
  use: {
    baseURL: BASE_URL,
    ...devices['Desktop Chrome'],
    viewport: { width: 1440, height: 900 },
    colorScheme: 'dark',
  },
  webServer: {
    command: `npm run preview -- --port ${PORT} --strictPort`,
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
