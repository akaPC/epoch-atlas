import { useFocus } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { useSearch } from '@/app/state/SearchContext';
import { SCENARIOS, SCENARIO_LABELS } from '@/data/schema';
import { UtcClock } from './UtcClock';

interface Props {
  onToggleNav: () => void;
  navOpen: boolean;
}

export function StatusBar({ onToggleNav, navOpen }: Props) {
  const { focus } = useFocus();
  const { scenario, setScenario } = useScenario();
  const { setOpen } = useSearch();

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 flex h-[var(--statusbar-height)] items-center gap-3 border-b border-hairline bg-panel/95 px-3 backdrop-blur md:pl-[calc(var(--rail-width)+0.75rem)]"
      role="banner"
    >
      <button
        type="button"
        className="btn md:hidden"
        aria-expanded={navOpen}
        aria-controls="primary-nav"
        onClick={onToggleNav}
      >
        Menu
      </button>
      <div className="min-w-0 flex-1 truncate font-mono text-[0.7rem] tracking-[0.14em] text-cyan" aria-live="polite">
        <span className="text-secondary">FOCUS</span> <span aria-hidden="true">//</span> {focus}
      </div>
      <div className="hidden items-center gap-1 sm:flex" role="group" aria-label="Takeoff scenario">
        <span className="mr-1 font-mono text-[0.65rem] tracking-[0.14em] text-secondary">SCENARIO</span>
        {SCENARIOS.map((s) => (
          <button
            key={s}
            type="button"
            className={`btn btn--${SCENARIO_LABELS[s].accent} !px-2 !py-1 !text-[0.62rem]`}
            aria-pressed={scenario === s}
            data-testid={`scenario-${s}`}
            onClick={() => setScenario(s)}
            title={`${SCENARIO_LABELS[s].name}: ${SCENARIO_LABELS[s].branch} branch`}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn !py-1"
        onClick={() => setOpen(true)}
        data-testid="open-search"
        aria-keyshortcuts="Meta+K Control+K"
      >
        Search <span className="ml-1 hidden text-secondary lg:inline">⌘K</span>
      </button>
      <div className="hidden lg:block">
        <UtcClock />
      </div>
      <div className="hidden font-mono text-[0.65rem] tracking-[0.12em] text-secondary xl:block" title="Build hash">
        BUILD {__BUILD_HASH__}
      </div>
    </header>
  );
}
