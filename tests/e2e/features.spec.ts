import { test, expect } from '@playwright/test';

test('search palette opens with the keyboard and finds the transistor', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Control+k');
  await expect(page.getByTestId('search-palette')).toBeVisible();
  await page.getByTestId('palette-input').fill('transistor');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/search\?q=transistor/);
  await expect(page.getByTestId('search-results').getByTestId('search-hit').first()).toContainText(/transistor/i);
  await page.getByTestId('search-hit').first().click();
  await expect(page).toHaveURL(/\/record\/events\/transistor/);
});

test('search page finds events by fuzzy query', async ({ page }) => {
  await page.goto('./search?q=transistr');
  await expect(page.getByTestId('search-hit').first()).toContainText(/transistor/i, { timeout: 15000 });
});

test('scenario selector reflows a projection globally', async ({ page }) => {
  await page.goto('./horizon/fields/energy');
  const headline = page.getByTestId('projection-headline');
  await expect(headline).toBeVisible();
  await page.getByTestId('scenario-slow').click();
  await expect(page.getByTestId('projection')).toHaveAttribute('data-branch', 'slow');
  const slowText = await headline.textContent();
  await page.getByTestId('scenario-fast').click();
  await expect(page.getByTestId('projection')).toHaveAttribute('data-branch', 'fast');
  const fastText = await headline.textContent();
  expect(fastText).not.toEqual(slowText);
  await page.goto('./horizon/convergence');
  await expect(page.getByTestId('convergence-decade').first()).toContainText('DISCONTINUOUS');
});

test('dragging an ensemble weight updates the chart medians', async ({ page }) => {
  await page.goto('./threshold');
  const before = await page.getByTestId('agi-median').textContent();
  const skeptic = page.getByTestId('weight-skeptic');
  await skeptic.focus();
  for (let i = 0; i < 60; i++) await page.keyboard.press('ArrowRight');
  await expect(page.getByTestId('weight-pct-skeptic')).not.toHaveText(/^10%$/);
  const after = await page.getByTestId('agi-median').textContent();
  expect(after).not.toEqual(before);
  await page.getByTestId('weights-reset').click();
  await expect(page.getByTestId('agi-median')).toHaveText(before ?? '');
});

test('timeline filter chips and epoch cards are present', async ({ page }) => {
  await page.goto('./record');
  await expect(page.getByTestId('timeline')).toBeVisible();
  await expect(page.getByTestId('epoch-card')).toHaveCount(13);
  await page.getByRole('button', { name: 'Space' }).click();
  await expect(page.getByTestId('timeline')).toContainText(/EVENTS/);
});

test('event page links prerequisites and consequences', async ({ page }) => {
  await page.goto('./record/events/integrated-circuit');
  await expect(page.getByTestId('prerequisites').getByRole('link').first()).toBeVisible();
  await expect(page.getByTestId('consequences').getByRole('link').first()).toBeVisible();
});

test('lifespan panel responds to a birth year', async ({ page }) => {
  await page.goto('./horizon/lifespan');
  await page.getByTestId('birth-year').fill('2020');
  await expect(page.getByTestId('lifespan-windows').locator('[data-status="full"]').first()).toBeVisible();
});

test('mobile layout exposes navigation through the menu button', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('./');
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.locator('#primary-nav').getByRole('link', { name: /The Horizon/ })).toBeVisible();
});
