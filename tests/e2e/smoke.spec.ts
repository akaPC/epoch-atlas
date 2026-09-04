import { test, expect } from '@playwright/test';

test('home page renders the three movements', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Epoch Atlas/);
  await expect(page.getByTestId('home-record')).toBeVisible();
  await expect(page.getByTestId('home-threshold')).toBeVisible();
  await expect(page.getByTestId('home-horizon')).toBeVisible();
});
