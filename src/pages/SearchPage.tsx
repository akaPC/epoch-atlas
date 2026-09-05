import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import type MiniSearch from 'minisearch';
import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';
import { loadSearchIndex, runSearch, type SearchHit } from '@/lib/search';

const KIND_LABEL: Record<string, string> = {
  event: 'EVENT',
  epoch: 'EPOCH',
  model: 'FORECAST MODEL',
  projection: 'PROJECTION',
  definition: 'DEFINITION',
  indicator: 'INDICATOR',
  convergence: 'CONVERGENCE',
  field: 'HORIZON FIELD',
};
const KIND_COLOR: Record<string, string> = {
  event: 'text-cyan',
  epoch: 'text-cyan',
  model: 'text-amber',
  definition: 'text-amber',
  indicator: 'text-amber',
  projection: 'text-red',
  convergence: 'text-red',
  field: 'text-red',
};

export default function SearchPage() {
  useFocusLabel('ATLAS // SEARCH', 'Search');
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const urlQuery = params.get('q') ?? '';
  const [typed, setTyped] = useState<string | null>(null);
  const query = typed ?? urlQuery;
  const setQuery = (v: string) => setTyped(v);
  const [index, setIndex] = useState<MiniSearch | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [kind, setKind] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alive = true;
    loadSearchIndex()
      .then((ms) => alive && setIndex(ms))
      .catch((e: Error) => alive && setError(e.message));
    return () => {
      alive = false;
    };
  }, []);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hits: SearchHit[] = useMemo(() => (index ? runSearch(index, query, 60) : []), [index, query]);
  const filtered = kind === 'all' ? hits : hits.filter((h) => h.kind === kind);
  const kinds = useMemo(() => Array.from(new Set(hits.map((h) => h.kind))), [hits]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(filtered.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter') {
      const h = filtered[active];
      if (h) navigate(h.route);
    }
  };

  return (
    <>
      <SectionHeader as="h1" index="//" code="SEARCH" title="Search the atlas" subtitle="Full-text, fuzzy and prefix matching across every event, epoch, forecast model, definition, indicator, field, projection and convergence. Use the arrow keys and Enter to navigate results." />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setParams(query ? { q: query } : {}, { replace: true });
          setTyped(null);
        }}
        className="panel brackets p-4"
      >
        <label htmlFor="search-input" className="index-label block pb-2">QUERY</label>
        <input
          id="search-input"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKey}
          className="field-input w-full text-lg"
          autoComplete="off"
          data-testid="search-input"
          aria-controls="search-results"
          aria-describedby="search-status"
        />
        <div id="search-status" className="mt-2 font-mono text-[0.66rem] tracking-[0.12em] text-secondary" aria-live="polite">
          {error ? `INDEX UNAVAILABLE: ${error}` : index ? `${filtered.length} RESULTS` : 'LOADING INDEX'}
        </div>
        {kinds.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-1" role="group" aria-label="Filter by type">
            <button type="button" className="chip" aria-pressed={kind === 'all'} onClick={() => setKind('all')}>
              All
            </button>
            {kinds.map((k) => (
              <button key={k} type="button" className="chip" aria-pressed={kind === k} onClick={() => setKind(k)}>
                {KIND_LABEL[k] ?? k}
              </button>
            ))}
          </div>
        )}
      </form>

      <ol id="search-results" className="mt-4 space-y-2" data-testid="search-results">
        {filtered.map((h, i) => (
          <li key={h.id}>
            <Link
              to={h.route}
              className={`panel brackets block p-3 transition-colors duration-150 hover:bg-hover ${i === active ? 'bg-raised' : ''}`}
              aria-current={i === active ? 'true' : undefined}
              onMouseEnter={() => setActive(i)}
              data-testid="search-hit"
            >
              <div className={`font-mono text-[0.62rem] tracking-[0.12em] ${KIND_COLOR[h.kind] ?? 'text-secondary'}`}>{KIND_LABEL[h.kind] ?? h.kind}</div>
              <div className="text-primary">{h.title}</div>
              <div className="text-xs text-secondary">{h.subtitle}</div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
