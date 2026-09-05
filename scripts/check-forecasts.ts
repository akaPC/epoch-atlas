/**
 * Validate forecast data files during authoring.
 * Usage: npx tsx scripts/check-forecasts.ts src/data/forecasts/models.ts
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ForecastModelSchema, DefinitionSchema, LeadingIndicatorSchema, FORBIDDEN_PATTERNS, wordCount } from '../src/data/schema';

const file = process.argv[2];
if (!file) {
  console.error('usage: tsx scripts/check-forecasts.ts <file>');
  process.exit(2);
}
const mod = (await import(pathToFileURL(resolve(process.cwd(), file)).href)) as Record<string, unknown[]>;
const problems: string[] = [];
const run = (label: string, schema: { safeParse: (v: unknown) => { success: boolean; error?: { issues: { path: (string | number)[]; message: string }[] } } }, items: unknown[] | undefined) => {
  if (!items) return;
  for (const it of items) {
    const r = schema.safeParse(it);
    const id = (it as { id?: string }).id ?? '?';
    if (!r.success) for (const i of r.error?.issues ?? []) problems.push(`${label} ${id} ${i.path.join('.')}: ${i.message}`);
  }
  console.log(`${label}: ${items.length}`);
};
run('model', ForecastModelSchema, mod.forecastModels);
run('definition', DefinitionSchema, mod.definitions);
run('indicator', LeadingIndicatorSchema, mod.leadingIndicators);
type P = { p5: number; p25: number; p50: number; p75: number; p95: number };
for (const m of (mod.forecastModels ?? []) as { id: string; reasoning: string; critique: string; agi: P; asi: P }[]) {
  const rw = wordCount(m.reasoning), cw = wordCount(m.critique);
  if (rw < 250) problems.push(`${m.id}: reasoning is ${rw} words (need at least 250)`);
  if (cw < 120) problems.push(`${m.id}: critique is ${cw} words (need at least 120)`);
  for (const k of ['agi', 'asi'] as const) {
    const p = m[k];
    if (!(p.p5 <= p.p25 && p.p25 <= p.p50 && p.p50 <= p.p75 && p.p75 <= p.p95)) problems.push(`${m.id}: ${k} percentiles not monotonic`);
  }
  if (m.asi.p50 < m.agi.p50) problems.push(`${m.id}: ASI median earlier than AGI median`);
}
const text = readFileSync(resolve(process.cwd(), file), 'utf8');
text.split('\n').forEach((l, i) => {
  for (const { label, pattern } of FORBIDDEN_PATTERNS) if (pattern.test(l)) problems.push(`forbidden string "${label}" at line ${i + 1}`);
});
if (problems.length) {
  console.error(`${problems.length} problem(s) in ${file}:`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log(`${file}: OK`);
