/**
 * Epoch Atlas data contract.
 *
 * Every record in src/data is validated against these Zod schemas at build time
 * (scripts/validate-data.ts) and in the Vitest quality-gate suite (tests/unit).
 *
 * Conventions:
 * - Years are signed integers on the astronomical scale. 3.3 million years ago is -3300000,
 *   2500 BCE is -2500, 1947 CE is 1947. There is no year zero problem because we never
 *   subtract BCE years against a calendar; we only order and scale them.
 * - Ids are kebab-case and globally unique within their collection.
 * - Every fact-bearing record carries `sources` and `lastReviewed`.
 * - No string anywhere may contain an em dash character. Use periods, commas, colons or parentheses.
 */
import { z } from 'zod';

export const ATLAS_PRESENT_YEAR = 2026;
export const ATLAS_PRESENT_LABEL = 'September 2026';

/* ------------------------------------------------------------------ */
/* Domains                                                             */
/* ------------------------------------------------------------------ */

export const DOMAINS = [
  'energy',
  'materials',
  'information',
  'computation',
  'biology-medicine',
  'transportation',
  'agriculture',
  'weapons-security',
  'communication',
  'space',
  'manufacturing',
] as const;
export type Domain = (typeof DOMAINS)[number];

export const DOMAIN_LABELS: Record<Domain, string> = {
  energy: 'Energy',
  materials: 'Materials',
  information: 'Information',
  computation: 'Computation',
  'biology-medicine': 'Biology and Medicine',
  transportation: 'Transportation',
  agriculture: 'Agriculture',
  'weapons-security': 'Weapons and Security',
  communication: 'Communication',
  space: 'Space',
  manufacturing: 'Manufacturing',
};

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

const kebab = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'id must be kebab-case');
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'lastReviewed must be YYYY-MM-DD');

export const SourceSchema = z.object({
  author: z.string().min(1),
  title: z.string().min(1),
  publisher: z.string().min(1),
  year: z.number().int(),
  url: z.string().url().optional(),
});
export type Source = z.infer<typeof SourceSchema>;

export const ConfidenceSchema = z.enum(['high', 'medium', 'low']);
export type Confidence = z.infer<typeof ConfidenceSchema>;

export const PRECISIONS = ['exact', 'year', 'decade', 'century', 'millennium', 'estimated'] as const;
export const PrecisionSchema = z.enum(PRECISIONS);
export type Precision = z.infer<typeof PrecisionSchema>;

/* ------------------------------------------------------------------ */
/* The Record: epochs and events                                       */
/* ------------------------------------------------------------------ */

export const EventDateSchema = z.object({
  /** Astronomical year. Negative for BCE. */
  year: z.number().int(),
  month: z.number().int().min(1).max(12).optional(),
  day: z.number().int().min(1).max(31).optional(),
  precision: PrecisionSchema,
  /** Human readable form, for example "c. 3.3 million years ago", "c. 3200 BCE", "1947-12-16". */
  display: z.string().min(1),
});
export type EventDate = z.infer<typeof EventDateSchema>;

export const FigureSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
});
export type Figure = z.infer<typeof FigureSchema>;

export const TechEventSchema = z.object({
  id: kebab,
  epochId: kebab,
  date: EventDateSchema,
  location: z.string().min(1),
  title: z.string().min(1),
  /** One or two sentences for cards, search results and tooltips. */
  summary: z.string().min(40).max(420),
  /** 300 to 600 words written for an intelligent generalist. Enforced by tests. */
  explanation: z.string().min(1),
  /** How it actually worked. */
  mechanism: z.string().min(1),
  /** Ids of earlier events this depended on. */
  prerequisites: z.array(kebab),
  /** Ids of later events this enabled. */
  consequences: z.array(kebab),
  figures: z.array(FigureSchema),
  significance: z.number().int().min(1).max(10),
  significanceJustification: z.string().min(1),
  domains: z.array(z.enum(DOMAINS)).min(1),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
  confidence: ConfidenceSchema,
  /** "developing" marks records after mid-2026 where the historical record is still forming. */
  verification: z.enum(['established', 'developing']).default('established'),
});
export type TechEvent = z.infer<typeof TechEventSchema>;
export type TechEventInput = z.input<typeof TechEventSchema>;

export const EpochSchema = z.object({
  id: kebab,
  /** 1 through 13, used for the "01 // PALEOLITHIC" index label. */
  index: z.number().int().min(1).max(13),
  name: z.string().min(1),
  /** Short uppercase code for index labels, for example "PALEOLITHIC". */
  code: z.string().min(1),
  startYear: z.number().int(),
  endYear: z.number().int(),
  /** Display form, for example "3.3 Mya to 12,000 BCE". */
  span: z.string().min(1),
  thesis: z.string().min(1),
  enablingConditions: z.array(z.string().min(1)).min(2),
  constraintsRemoved: z.array(z.string().min(1)).min(2),
  secondOrderConsequences: z.array(z.string().min(1)).min(2),
  transition: z.string().min(1),
  /** What changed for a human being living through it. */
  humanExperience: z.string().min(1),
  minEvents: z.number().int().min(1),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
});
export type Epoch = z.infer<typeof EpochSchema>;

/* ------------------------------------------------------------------ */
/* The Threshold: forecasts                                            */
/* ------------------------------------------------------------------ */

/** Arrival year percentiles. Values above NEVER_YEAR are rendered as "beyond 2200 or never". */
export const NEVER_YEAR = 2200;
export const PercentilesSchema = z.object({
  p5: z.number(),
  p25: z.number(),
  p50: z.number(),
  p75: z.number(),
  p95: z.number(),
});
export type Percentiles = z.infer<typeof PercentilesSchema>;

export const ForecastInputSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  note: z.string().optional(),
});

export const ForecastModelSchema = z.object({
  id: kebab,
  index: z.number().int().min(1).max(8),
  name: z.string().min(1),
  shortName: z.string().min(1),
  summary: z.string().min(1),
  /** How the model produces its estimate. */
  approach: z.string().min(1),
  assumptions: z.array(z.string().min(1)).min(3),
  inputs: z.array(ForecastInputSchema).min(3),
  agi: PercentilesSchema,
  asi: PercentilesSchema,
  /** The written argument for the distribution. */
  reasoning: z.string().min(1),
  /** The written critique of its weaknesses. */
  critique: z.string().min(1),
  /** Default weight in the ensemble, 0 to 1. Weights are normalized at render time. */
  defaultWeight: z.number().min(0).max(1),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
  confidence: ConfidenceSchema,
});
export type ForecastModel = z.infer<typeof ForecastModelSchema>;

export const SCENARIOS = ['slow', 'moderate', 'fast'] as const;
export const ScenarioSchema = z.enum(SCENARIOS);
export type Scenario = z.infer<typeof ScenarioSchema>;

export const SCENARIO_LABELS: Record<Scenario, { name: string; branch: string; accent: 'cyan' | 'amber' | 'red' }> = {
  slow: { name: 'Slow takeoff', branch: 'Baseline', accent: 'cyan' },
  moderate: { name: 'Moderate takeoff', branch: 'Accelerated', accent: 'amber' },
  fast: { name: 'Fast takeoff', branch: 'Discontinuous', accent: 'red' },
};

export const TakeoffScenarioSchema = z.object({
  id: ScenarioSchema,
  name: z.string().min(1),
  branchLabel: z.string().min(1),
  /** Years between AGI and ASI. */
  yearsAgiToAsi: z.object({ p25: z.number(), p50: z.number(), p75: z.number() }),
  /** Probability the ensemble assigns to this scenario. The three must sum to 1. */
  probability: z.number().min(0).max(1),
  summary: z.string().min(1),
  narrative: z.string().min(1),
  mechanisms: z.array(z.object({ name: z.string().min(1), description: z.string().min(1) })).min(3),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
});
export type TakeoffScenario = z.infer<typeof TakeoffScenarioSchema>;

export const LeadingIndicatorSchema = z.object({
  id: kebab,
  name: z.string().min(1),
  description: z.string().min(1),
  whyItMatters: z.string().min(1),
  /** Status as of September 2026. */
  status: z.string().min(1),
  /** Which way the current status pushes the estimate. */
  direction: z.enum(['earlier', 'later', 'mixed', 'unchanged']),
  asOf: isoDate,
  sources: z.array(SourceSchema),
});
export type LeadingIndicator = z.infer<typeof LeadingIndicatorSchema>;

export const DefinitionSchema = z.object({
  id: kebab,
  term: z.string().min(1),
  shortDefinition: z.string().min(1),
  definition: z.string().min(1),
  /** The strongest case for taking this concept seriously as framed. */
  steelman: z.string().min(1),
  /** How it differs from neighbouring concepts. */
  contrast: z.string().min(1),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
});
export type Definition = z.infer<typeof DefinitionSchema>;

/* ------------------------------------------------------------------ */
/* The Horizon: projections                                            */
/* ------------------------------------------------------------------ */

export const HORIZON_FIELD_IDS = [
  'compute-ai',
  'energy',
  'biotech-longevity',
  'medicine-neurotech',
  'materials-nano',
  'space-launch',
  'robotics-manufacturing',
  'transportation',
  'agriculture-food',
  'communication-networks',
  'climate-engineering',
  'quantum',
  'weapons-security',
  'governance-economy',
] as const;
export type HorizonFieldId = (typeof HORIZON_FIELD_IDS)[number];

export const WINDOWS = ['2026-2030', '2030-2040', '2040-2060', '2060-2090', '2090-2126'] as const;
export const WindowSchema = z.enum(WINDOWS);
export type Window = z.infer<typeof WindowSchema>;

export const WINDOW_BOUNDS: Record<Window, [number, number]> = {
  '2026-2030': [2026, 2030],
  '2030-2040': [2030, 2040],
  '2040-2060': [2040, 2060],
  '2060-2090': [2060, 2090],
  '2090-2126': [2090, 2126],
};

export const ProjectionSchema = z.object({
  fieldId: z.enum(HORIZON_FIELD_IDS),
  window: WindowSchema,
  branch: ScenarioSchema,
  headline: z.string().min(1),
  /** 200 to 400 words of what it looks like on the ground. Enforced by tests. */
  narrative: z.string().min(1),
  /** Event ids from The Record that this projection depends on, nearest first. */
  dependencies: z.array(kebab).min(1),
  uncertainties: z.array(z.string().min(1)).min(2),
  indicators: z.array(z.string().min(1)).min(2),
  confidence: ConfidenceSchema,
  confidenceJustification: z.string().min(1),
  sources: z.array(SourceSchema),
});
export type Projection = z.infer<typeof ProjectionSchema>;

export const PhysicalLimitSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  sources: z.array(SourceSchema),
});

export const CapabilityPointSchema = z.object({
  year: z.number().int(),
  /** Capability index, 0 to 100, where 100 is the field's plausible physical ceiling. */
  value: z.number().min(0).max(100),
  low: z.number().min(0).max(100),
  high: z.number().min(0).max(100),
});
export type CapabilityPoint = z.infer<typeof CapabilityPointSchema>;

export const HorizonFieldSchema = z.object({
  id: z.enum(HORIZON_FIELD_IDS),
  index: z.number().int().min(1).max(14),
  name: z.string().min(1),
  code: z.string().min(1),
  summary: z.string().min(1),
  /** What the capability index measures for this field and what 100 means. */
  indexDefinition: z.string().min(1),
  physicalLimits: z.array(PhysicalLimitSchema).min(2),
  projections: z.array(ProjectionSchema),
  capabilityIndex: z.object({
    slow: z.array(CapabilityPointSchema).min(4),
    moderate: z.array(CapabilityPointSchema).min(4),
    fast: z.array(CapabilityPointSchema).min(4),
  }),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
});
export type HorizonField = z.infer<typeof HorizonFieldSchema>;

export const ConvergenceSchema = z.object({
  id: kebab,
  name: z.string().min(1),
  fieldIds: z.array(z.enum(HORIZON_FIELD_IDS)).min(2),
  description: z.string().min(1),
  mechanism: z.string().min(1),
  /** Decade of expected convergence per scenario, for example 2040. */
  decade: z.object({ slow: z.number().int(), moderate: z.number().int(), fast: z.number().int() }),
  dependencies: z.array(kebab).min(1),
  sources: z.array(SourceSchema),
  lastReviewed: isoDate,
});
export type Convergence = z.infer<typeof ConvergenceSchema>;

/* ------------------------------------------------------------------ */
/* Forbidden strings                                                   */
/* ------------------------------------------------------------------ */

export const FORBIDDEN_PATTERNS: { label: string; pattern: RegExp }[] = [
  { label: 'TODO', pattern: /\bTODO\b/ },
  { label: 'lorem', pattern: /lorem/i },
  { label: 'placeholder', pattern: /placeholder/i },
  { label: 'coming soon', pattern: /coming soon/i },
  { label: 'TBD', pattern: /\bTBD\b/ },
  { label: 'em dash', pattern: /—/ },
];

/** Count words the way the quality gates do. */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Normalized key used to deduplicate sources across the atlas. */
export function sourceKey(s: Source): string {
  const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  return `${norm(s.author)}|${norm(s.title)}|${s.year}`;
}
