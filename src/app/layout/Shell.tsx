import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LeftRail } from './LeftRail';
import { StatusBar } from './StatusBar';
import { SearchPalette } from '@/components/SearchPalette';

function RouteLoading() {
  return (
    <div className="p-8 font-mono text-[0.72rem] tracking-[0.14em] text-secondary" role="status" aria-live="polite">
      LOADING // MODULE
    </div>
  );
}

export function Shell() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only-focusable btn fixed left-2 top-2 z-[60]">
        Skip to content
      </a>
      <StatusBar onToggleNav={() => setNavOpen((v) => !v)} navOpen={navOpen} />
      <LeftRail open={navOpen} onClose={() => setNavOpen(false)} />
      <main
        id="main"
        className="min-h-screen pt-[var(--statusbar-height)] md:pl-[var(--rail-width)]"
        tabIndex={-1}
      >
        <div className="fade-in mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8" key={location.pathname}>
          <Suspense fallback={<RouteLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <SearchPalette />
    </div>
  );
}
