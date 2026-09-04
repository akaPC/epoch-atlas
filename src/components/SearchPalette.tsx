import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/app/state/SearchContext';

/**
 * Global search palette shell. The search engine itself is loaded lazily by the
 * Search page module so the home route stays light.
 */
export function SearchPalette() {
  const { open, setOpen } = useSearch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-void/80 p-4 pt-[10vh]" role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the atlas"
        className="panel brackets w-full max-w-2xl p-4"
        data-testid="search-palette"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const q = inputRef.current?.value.trim() ?? '';
            setOpen(false);
            navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
          }}
        >
          <label htmlFor="palette-input" className="index-label block pb-2">
            SEARCH // EVENTS, EPOCHS, FORECASTS, PROJECTIONS
          </label>
          <input
            id="palette-input"
            ref={inputRef}
            type="search"
            className="field-input w-full text-base"
            placeholder=""
            autoComplete="off"
            data-testid="palette-input"
          />
          <div className="mt-3 flex items-center justify-between font-mono text-[0.65rem] tracking-[0.12em] text-secondary">
            <span>ENTER TO SEARCH. ESC TO CLOSE.</span>
            <button type="button" className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
