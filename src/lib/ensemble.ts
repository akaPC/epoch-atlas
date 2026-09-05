import type { ForecastModel, Percentiles } from '@/data/schema';

const PCT: (keyof Percentiles)[] = ['p5', 'p25', 'p50', 'p75', 'p95'];
const PCT_VALUES = [0.05, 0.25, 0.5, 0.75, 0.95];

/**
 * Reconstruct a piecewise-linear CDF from five percentiles, then evaluate.
 * Below p5 and above p95 we extend linearly at the same slope as the nearest segment, clamped to [0,1].
 */
export function cdfFromPercentiles(p: Percentiles): (year: number) => number {
  const xs = PCT.map((k) => p[k]);
  return (year: number) => {
    if (year <= xs[0]!) {
      const slope = (PCT_VALUES[1]! - PCT_VALUES[0]!) / Math.max(1e-6, xs[1]! - xs[0]!);
      return Math.max(0, PCT_VALUES[0]! - (xs[0]! - year) * slope);
    }
    if (year >= xs[4]!) {
      const slope = (PCT_VALUES[4]! - PCT_VALUES[3]!) / Math.max(1e-6, xs[4]! - xs[3]!);
      return Math.min(1, PCT_VALUES[4]! + (year - xs[4]!) * slope);
    }
    for (let i = 0; i < 4; i++) {
      const x0 = xs[i]!, x1 = xs[i + 1]!;
      if (year >= x0 && year <= x1) {
        const t = x1 === x0 ? 1 : (year - x0) / (x1 - x0);
        return PCT_VALUES[i]! + t * (PCT_VALUES[i + 1]! - PCT_VALUES[i]!);
      }
    }
    return 1;
  };
}

/** Mixture CDF of the weighted models for either the AGI or ASI distribution. */
export function mixtureCdf(models: ForecastModel[], weights: Record<string, number>, key: 'agi' | 'asi'): (year: number) => number {
  const total = models.reduce((n, m) => n + (weights[m.id] ?? 0), 0) || 1;
  const parts = models.map((m) => ({ w: (weights[m.id] ?? 0) / total, cdf: cdfFromPercentiles(m[key]) }));
  return (year: number) => parts.reduce((s, p) => s + p.w * p.cdf(year), 0);
}

/** Invert the mixture CDF numerically for the requested quantiles. */
export function mixturePercentiles(models: ForecastModel[], weights: Record<string, number>, key: 'agi' | 'asi'): Percentiles {
  const cdf = mixtureCdf(models, weights, key);
  const q = (target: number) => {
    let lo = 2024, hi = 2400;
    for (let i = 0; i < 50; i++) {
      const mid = (lo + hi) / 2;
      if (cdf(mid) < target) lo = mid; else hi = mid;
    }
    return (lo + hi) / 2;
  };
  return { p5: q(0.05), p25: q(0.25), p50: q(0.5), p75: q(0.75), p95: q(0.95) };
}

export function defaultWeights(models: ForecastModel[]): Record<string, number> {
  return Object.fromEntries(models.map((m) => [m.id, m.defaultWeight]));
}
