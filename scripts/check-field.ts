/**
 * Validate a single Horizon field file during authoring.
 * Usage: npx tsx scripts/check-field.ts src/data/horizon/01-compute-ai.ts
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { HorizonFieldSchema, FORBIDDEN_PATTERNS, WINDOWS, SCENARIOS, wordCount, type HorizonField } from '../src/data/schema';

const file = process.argv[2];
if (!file) {
  console.error('usage: tsx scripts/check-field.ts <file>');
  process.exit(2);
}
const registry = new Set<string>();
const registryText = readFileSync(resolve(process.cwd(), 'docs/EVENT_IDS.md'), 'utf8');
for (const line of registryText.split('\n')) {
  if (line.startsWith('#') || line.startsWith('Epoch ids') || line.startsWith('`') || !line.trim()) continue;
  for (const id of line.split(',').map((s) => s.trim()).filter(Boolean)) registry.add(id);
}

const mod = (await import(pathToFileURL(resolve(process.cwd(), file)).href)) as { field: HorizonField };
const problems: string[] = [];
const r = HorizonFieldSchema.safeParse(mod.field);
if (!r.success) for (const i of r.error.issues) problems.push(`${i.path.join('.')}: ${i.message}`);

const seen = new Map<string, number>();
for (const p of mod.field.projections ?? []) {
  const key = `${p.window}/${p.branch}`;
  seen.set(key, (seen.get(key) ?? 0) + 1);
  if (p.fieldId !== mod.field.id) problems.push(`${key}: fieldId ${p.fieldId} does not match ${mod.field.id}`);
  const wc = wordCount(p.narrative ?? '');
  if (wc < 200 || wc > 400) problems.push(`${key}: narrative is ${wc} words (need 200 to 400)`);
  if ((p.sources ?? []).length < 1) problems.push(`${key}: needs at least 1 source`);
  for (const d of p.dependencies ?? []) if (!registry.has(d)) problems.push(`${key}: dependency "${d}" not in docs/EVENT_IDS.md`);
}
for (const w of WINDOWS) for (const s of SCENARIOS) {
  const n = seen.get(`${w}/${s}`) ?? 0;
  if (n !== 1) problems.push(`window ${w} branch ${s}: expected exactly 1 projection, found ${n}`);
}
for (const s of SCENARIOS) {
  const pts = mod.field.capabilityIndex?.[s] ?? [];
  const years = pts.map((p) => p.year);
  for (const y of [2026, 2030, 2040, 2060, 2090, 2126]) if (!years.includes(y)) problems.push(`capabilityIndex.${s}: missing year ${y}`);
  for (const p of pts) if (p.low > p.value || p.high < p.value) problems.push(`capabilityIndex.${s} ${p.year}: low <= value <= high violated`);
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
console.log(`${file}: ${mod.field.projections.length} projections OK`);
