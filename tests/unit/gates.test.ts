/**
 * Quality gates. These assert content completeness, not just shape.
 */
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  epochs,
  events,
  forecastModels,
  takeoffScenarios,
  leadingIndicators,
  definitions,
  horizonFields,
  convergences,
} from '@/data';
import {
  EpochSchema,
  TechEventSchema,
  ForecastModelSchema,
  TakeoffScenarioSchema,
  LeadingIndicatorSchema,
  DefinitionSchema,
  HorizonFieldSchema,
  ConvergenceSchema,
  FORBIDDEN_PATTERNS,
  HORIZON_FIELD_IDS,
  SCENARIOS,
  WINDOWS,
  wordCount,
  sourceKey,
  type Source,
} from '@/data/schema';

const MIN_EVENTS: Record<string, number> = {
  paleolithic: 12,
  neolithic: 14,
  'bronze-age': 12,
  'iron-age-classical': 16,
  medieval: 16,
  'print-scientific': 18,
  'industrial-first': 18,
  'industrial-second': 24,
  'physics-total-war': 18,
  'atomic-space': 24,
  'microprocessor-pc': 22,
  'networked-world': 20,
  'intelligence-era': 30,
};

const eventById = new Map(events.map((e) => [e.id, e]));
const epochById = new Map(epochs.map((e) => [e.id, e]));

describe('schema validity', () => {
  it('every epoch is valid', () => {
    for (const e of epochs) expect(EpochSchema.safeParse(e).success, e.id).toBe(true);
  });
  it('every event is valid', () => {
    for (const e of events) {
      const r = TechEventSchema.safeParse(e);
      expect(r.success, `${e.id}: ${r.success ? '' : JSON.stringify(r.error.issues)}`).toBe(true);
    }
  });
  it('every forecast record is valid', () => {
    for (const m of forecastModels) expect(ForecastModelSchema.safeParse(m).success, m.id).toBe(true);
    for (const s of takeoffScenarios) expect(TakeoffScenarioSchema.safeParse(s).success, s.id).toBe(true);
    for (const s of leadingIndicators) expect(LeadingIndicatorSchema.safeParse(s).success, s.id).toBe(true);
    for (const s of definitions) expect(DefinitionSchema.safeParse(s).success, s.id).toBe(true);
  });
  it('every horizon record is valid', () => {
    for (const f of horizonFields) {
      const r = HorizonFieldSchema.safeParse(f);
      expect(r.success, `${f.id}: ${r.success ? '' : JSON.stringify(r.error.issues.slice(0, 3))}`).toBe(true);
    }
    for (const c of convergences) expect(ConvergenceSchema.safeParse(c).success, c.id).toBe(true);
  });
});

describe('The Record: epochs', () => {
  it('has exactly 13 epochs indexed 1 through 13 in contiguous order', () => {
    expect(epochs.length).toBe(13);
    const sorted = [...epochs].sort((a, b) => a.index - b.index);
    sorted.forEach((e, i) => {
      expect(e.index).toBe(i + 1);
      const next = sorted[i + 1];
      if (next) expect(next.startYear, `${e.id} -> ${next.id}`).toBe(e.endYear);
    });
    expect(sorted[0]?.startYear).toBe(-3300000);
    expect(sorted[12]?.endYear).toBe(2026);
  });
  it('every epoch meets its minimum event count', () => {
    for (const [id, min] of Object.entries(MIN_EVENTS)) {
      const n = events.filter((e) => e.epochId === id).length;
      expect(n, `${id}: ${n} events, minimum ${min}`).toBeGreaterThanOrEqual(min);
    }
  });
});

describe('The Record: events', () => {
  it('has unique ids', () => {
    expect(new Set(events.map((e) => e.id)).size).toBe(events.length);
  });
  it('every event has a 300 to 600 word explanation', () => {
    for (const e of events) {
      const n = wordCount(e.explanation);
      expect(n, `${e.id}: ${n} words`).toBeGreaterThanOrEqual(300);
      expect(n, `${e.id}: ${n} words`).toBeLessThanOrEqual(600);
    }
  });
  it('every event has at least one domain', () => {
    for (const e of events) expect(e.domains.length, e.id).toBeGreaterThanOrEqual(1);
  });
  it('every event has at least two sources', () => {
    for (const e of events) expect(e.sources.length, e.id).toBeGreaterThanOrEqual(2);
  });
  it('every prerequisite and consequence id resolves to a real event', () => {
    for (const e of events) {
      for (const p of e.prerequisites) expect(eventById.has(p), `${e.id} prerequisite ${p}`).toBe(true);
      for (const c of e.consequences) expect(eventById.has(c), `${e.id} consequence ${c}`).toBe(true);
    }
  });
  it('prerequisites are not later than the event and consequences are not earlier', () => {
    for (const e of events) {
      for (const p of e.prerequisites) {
        const pe = eventById.get(p)!;
        expect(pe.date.year, `${e.id} <- ${p}`).toBeLessThanOrEqual(e.date.year);
      }
      for (const c of e.consequences) {
        const ce = eventById.get(c)!;
        expect(ce.date.year, `${e.id} -> ${c}`).toBeGreaterThanOrEqual(e.date.year);
      }
    }
  });
  it('no event is orphaned outside its epoch or the timeline range', () => {
    for (const e of events) {
      const ep = epochById.get(e.epochId);
      expect(ep, `${e.id} epoch ${e.epochId}`).toBeDefined();
      expect(e.date.year, `${e.id} year`).toBeGreaterThanOrEqual(ep!.startYear);
      expect(e.date.year, `${e.id} year`).toBeLessThanOrEqual(ep!.endYear);
      expect(e.date.year).toBeGreaterThanOrEqual(-3300000);
      expect(e.date.year).toBeLessThanOrEqual(2026);
    }
  });
  it('every event carries a review date and confidence', () => {
    for (const e of events) {
      expect(e.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(['high', 'medium', 'low']).toContain(e.confidence);
    }
  });
});

describe('The Threshold', () => {
  it('has eight forecast models with weights that sum to one', () => {
    expect(forecastModels.length).toBe(8);
    const sum = forecastModels.reduce((n, m) => n + m.defaultWeight, 0);
    expect(Math.abs(sum - 1)).toBeLessThan(1e-6);
    expect(new Set(forecastModels.map((m) => m.index)).size).toBe(8);
  });
  it('model percentiles are monotonic and ASI follows AGI', () => {
    for (const m of forecastModels) {
      for (const k of ['agi', 'asi'] as const) {
        const p = m[k];
        expect(p.p5 <= p.p25 && p.p25 <= p.p50 && p.p50 <= p.p75 && p.p75 <= p.p95, `${m.id} ${k}`).toBe(true);
      }
      expect(m.asi.p50, m.id).toBeGreaterThanOrEqual(m.agi.p50);
    }
  });
  it('has three takeoff scenarios whose probabilities sum to one', () => {
    expect(takeoffScenarios.map((s) => s.id).sort()).toEqual(['fast', 'moderate', 'slow']);
    const sum = takeoffScenarios.reduce((n, s) => n + s.probability, 0);
    expect(Math.abs(sum - 1)).toBeLessThan(1e-6);
  });
  it('has definitions and leading indicators', () => {
    expect(definitions.length).toBeGreaterThanOrEqual(10);
    expect(leadingIndicators.length).toBeGreaterThanOrEqual(10);
  });
});

describe('The Horizon', () => {
  it('has all fourteen fields', () => {
    expect(horizonFields.map((f) => f.id).sort()).toEqual([...HORIZON_FIELD_IDS].sort());
  });
  it('every field has all five windows and all three branches populated', () => {
    for (const f of horizonFields) {
      for (const w of WINDOWS)
        for (const s of SCENARIOS) {
          const n = f.projections.filter((p) => p.window === w && p.branch === s).length;
          expect(n, `${f.id} ${w} ${s}`).toBe(1);
        }
      expect(f.projections.length, f.id).toBe(15);
    }
  });
  it('projection narratives are 200 to 400 words and dependencies resolve', () => {
    for (const f of horizonFields)
      for (const p of f.projections) {
        const n = wordCount(p.narrative);
        expect(n, `${f.id} ${p.window} ${p.branch}: ${n} words`).toBeGreaterThanOrEqual(200);
        expect(n, `${f.id} ${p.window} ${p.branch}: ${n} words`).toBeLessThanOrEqual(400);
        expect(p.dependencies.length).toBeGreaterThanOrEqual(1);
        for (const d of p.dependencies) expect(eventById.has(d), `${f.id} ${p.window} ${p.branch} -> ${d}`).toBe(true);
      }
  });
  it('capability indexes are non-decreasing with bands that contain the value', () => {
    for (const f of horizonFields)
      for (const s of SCENARIOS) {
        const pts = f.capabilityIndex[s];
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i]!;
          expect(p.low <= p.value && p.value <= p.high, `${f.id} ${s} ${p.year}`).toBe(true);
          if (i > 0) expect(p.value, `${f.id} ${s} ${p.year}`).toBeGreaterThanOrEqual(pts[i - 1]!.value);
        }
      }
  });
  it('convergences reference real fields and events', () => {
    expect(convergences.length).toBeGreaterThanOrEqual(6);
    for (const c of convergences) {
      for (const d of c.dependencies) expect(eventById.has(d), `${c.id} -> ${d}`).toBe(true);
    }
  });
});

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|mdx|md)$/.test(name)) out.push(p);
  }
  return out;
}

describe('integrity', () => {
  it('no forbidden strings in src/data or src/content', () => {
    const root = resolve(process.cwd());
    const files = [...walk(join(root, 'src/data')), ...walk(join(root, 'src/content'))].filter(
      (f) => !f.endsWith('schema.ts') && !f.includes('/generated/'),
    );
    const hits: string[] = [];
    for (const f of files) {
      const lines = readFileSync(f, 'utf8').split('\n');
      lines.forEach((line, i) => {
        for (const { label, pattern } of FORBIDDEN_PATTERNS)
          if (pattern.test(line)) hits.push(`${f.replace(root, '')}:${i + 1} ${label}`);
      });
    }
    expect(hits, hits.slice(0, 20).join('\n')).toEqual([]);
  });
  it('no more than 3 percent of fact-bearing records have empty sources', () => {
    const records: { id: string; sources: Source[] }[] = [
      ...epochs.map((e) => ({ id: `epoch:${e.id}`, sources: e.sources })),
      ...events.map((e) => ({ id: `event:${e.id}`, sources: e.sources })),
      ...forecastModels.map((m) => ({ id: `model:${m.id}`, sources: m.sources })),
      ...takeoffScenarios.map((s) => ({ id: `takeoff:${s.id}`, sources: s.sources })),
      ...leadingIndicators.map((s) => ({ id: `indicator:${s.id}`, sources: s.sources })),
      ...definitions.map((s) => ({ id: `definition:${s.id}`, sources: s.sources })),
      ...horizonFields.flatMap((f) => f.projections.map((p) => ({ id: `projection:${f.id}/${p.window}/${p.branch}`, sources: p.sources }))),
      ...convergences.map((c) => ({ id: `convergence:${c.id}`, sources: c.sources })),
    ];
    const empty = records.filter((r) => r.sources.length === 0);
    const ratio = records.length ? empty.length / records.length : 0;
    expect(ratio, `${empty.length} of ${records.length} empty: ${empty.map((r) => r.id).slice(0, 10).join(', ')}`).toBeLessThanOrEqual(0.03);
  });
  it('the atlas cites at least 400 distinct sources', () => {
    const all: Source[] = [
      ...epochs.flatMap((e) => e.sources),
      ...events.flatMap((e) => e.sources),
      ...forecastModels.flatMap((m) => m.sources),
      ...takeoffScenarios.flatMap((s) => s.sources),
      ...leadingIndicators.flatMap((s) => s.sources),
      ...definitions.flatMap((s) => s.sources),
      ...horizonFields.flatMap((f) => [...f.sources, ...f.physicalLimits.flatMap((p) => p.sources), ...f.projections.flatMap((p) => p.sources)]),
      ...convergences.flatMap((c) => c.sources),
    ];
    const distinct = new Set(all.map(sourceKey)).size;
    expect(distinct, `${distinct} distinct sources`).toBeGreaterThanOrEqual(400);
  });
});
