/**
 * Aggregated, validated atlas data. Content modules are added as each movement lands.
 */
import type { Epoch, TechEvent, ForecastModel, HorizonField, Convergence, TakeoffScenario, LeadingIndicator, Definition } from './schema';

export const epochs: Epoch[] = [];
export const events: TechEvent[] = [];
export const forecastModels: ForecastModel[] = [];
export const takeoffScenarios: TakeoffScenario[] = [];
export const leadingIndicators: LeadingIndicator[] = [];
export const definitions: Definition[] = [];
export const horizonFields: HorizonField[] = [];
export const convergences: Convergence[] = [];
