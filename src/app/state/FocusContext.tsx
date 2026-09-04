import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

interface FocusState {
  focus: string;
  setFocus: (label: string) => void;
}

const FocusContext = createContext<FocusState | null>(null);

export function FocusProvider({ children }: { children: ReactNode }) {
  const [focus, setFocus] = useState('ATLAS // OVERVIEW');
  const value = useMemo(() => ({ focus, setFocus }), [focus]);
  return <FocusContext.Provider value={value}>{children}</FocusContext.Provider>;
}

export function useFocus(): FocusState {
  const ctx = useContext(FocusContext);
  if (!ctx) throw new Error('useFocus must be used inside FocusProvider');
  return ctx;
}

/** Declare what the status bar should show while this page is mounted. */
export function useFocusLabel(label: string, title?: string) {
  const { setFocus } = useFocus();
  useEffect(() => {
    setFocus(label);
    const prev = document.title;
    document.title = title ? `${title} | Epoch Atlas` : 'Epoch Atlas';
    return () => {
      document.title = prev;
    };
  }, [label, title, setFocus]);
}
