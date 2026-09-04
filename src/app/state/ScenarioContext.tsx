import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { SCENARIOS, type Scenario } from '@/data/schema';

interface ScenarioState {
  scenario: Scenario;
  setScenario: (s: Scenario) => void;
}

const ScenarioContext = createContext<ScenarioState | null>(null);
const STORAGE_KEY = 'epoch-atlas:scenario';

function readInitial(): Scenario {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v && (SCENARIOS as readonly string[]).includes(v)) return v as Scenario;
  } catch {
    /* storage unavailable */
  }
  return 'moderate';
}

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setState] = useState<Scenario>(readInitial);
  const setScenario = useCallback((s: Scenario) => {
    setState(s);
    try {
      window.localStorage.setItem(STORAGE_KEY, s);
    } catch {
      /* ignore */
    }
  }, []);
  const value = useMemo(() => ({ scenario, setScenario }), [scenario, setScenario]);
  return <ScenarioContext.Provider value={value}>{children}</ScenarioContext.Provider>;
}

export function useScenario(): ScenarioState {
  const ctx = useContext(ScenarioContext);
  if (!ctx) throw new Error('useScenario must be used inside ScenarioProvider');
  return ctx;
}
