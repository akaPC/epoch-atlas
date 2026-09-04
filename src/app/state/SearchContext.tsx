import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

interface SearchState {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
}

const SearchContext = createContext<SearchState | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggle]);
  const value = useMemo(() => ({ open, setOpen, toggle }), [open, toggle]);
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch(): SearchState {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used inside SearchProvider');
  return ctx;
}
