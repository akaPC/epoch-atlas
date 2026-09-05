import { test } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'docs/screenshots';
mkdirSync(OUT, { recursive: true });

const SHOTS: [string, string][] = [
  ['./', 'home'],
  ['./record', 'record-timeline'],
  ['./record/graph', 'record-graph'],
  ['./record/events/transistor', 'event-transistor'],
  ['./threshold', 'threshold'],
  ['./horizon/fields/compute-ai', 'horizon-compute'],
  ['./horizon/convergence', 'horizon-convergence'],
];

for (const [route, name] of SHOTS) {
  test(`screenshot ${name}`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  });
}

test('render PWA icons from the SVG', async ({ page }) => {
  for (const size of [192, 512]) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`<html><body style="margin:0;background:#05070a"><img src="data:image/svg+xml;base64,${Buffer.from(SVG).toString('base64')}" width="${size}" height="${size}" style="display:block"/></body></html>`);
    await page.screenshot({ path: `public/icon-${size}.png`, clip: { x: 0, y: 0, width: size, height: size } });
  }
});

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="8" fill="#05070a"/>
  <rect x="6" y="6" width="52" height="52" rx="4" fill="none" stroke="#22d3ee" stroke-opacity="0.35" stroke-width="1"/>
  <path d="M10 44 L24 32 L34 38 L54 14" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="54" cy="14" r="4" fill="#f5b625"/>
  <circle cx="10" cy="44" r="3" fill="#22d3ee"/>
</svg>`;
