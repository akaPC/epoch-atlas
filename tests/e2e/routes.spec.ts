import { test, expect } from '@playwright/test';

const ROUTES = [
  ['./', 'Epoch Atlas'],
  ['./record', 'The Record'],
  ['./record/graph', 'Dependency graph'],
  ['./record/domains', 'Domain lenses'],
  ['./record/acceleration', 'Acceleration'],
  ['./record/epochs/paleolithic', 'Paleolithic'],
  ['./record/events/transistor', 'transistor'],
  ['./threshold', 'The Threshold'],
  ['./horizon', 'The Horizon'],
  ['./horizon/fields/compute-ai', 'Compute and AI'],
  ['./horizon/convergence', 'Convergence'],
  ['./horizon/lifespan', 'You in 2076'],
  ['./search', 'Search'],
  ['./sources', 'Sources'],
  ['./methodology', 'Methodology'],
  ['./about', 'About'],
] as const;

for (const [route, title] of ROUTES) {
  test(`route ${route} renders`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(route);
    await expect(page).toHaveTitle(new RegExp(title, 'i'));
    await expect(page.locator('main h1').first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('deep link survives via 404 fallback', async ({ page }) => {
  const res = await page.goto('./record/events/oldowan-tools');
  expect(res?.status()).toBeLessThan(500);
  await expect(page.locator('main h1').first()).toContainText(/Oldowan/i);
});

test('unknown route shows the not found panel', async ({ page }) => {
  await page.goto('./record/events/does-not-exist');
  await expect(page.getByText('Nothing filed here')).toBeVisible();
});
