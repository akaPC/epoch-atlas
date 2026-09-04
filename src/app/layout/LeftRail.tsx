import { NavLink } from 'react-router-dom';

interface Item {
  to: string;
  index?: string;
  label: string;
  accent?: 'cyan' | 'amber' | 'red';
  end?: boolean;
}

const MOVEMENTS: Item[] = [
  { to: '/record', index: '01', label: 'The Record', accent: 'cyan' },
  { to: '/threshold', index: '02', label: 'The Threshold', accent: 'amber' },
  { to: '/horizon', index: '03', label: 'The Horizon', accent: 'red' },
];

const UTILITIES: Item[] = [
  { to: '/search', label: 'Search' },
  { to: '/sources', label: 'Sources' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/about', label: 'About' },
];

const accentText = { cyan: 'text-cyan', amber: 'text-amber', red: 'text-red' } as const;
const accentBorder = { cyan: 'border-cyan', amber: 'border-amber', red: 'border-red' } as const;

function RailLink({ item, onNavigate }: { item: Item; onNavigate: () => void }) {
  const accent = item.accent ?? 'cyan';
  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group flex items-center gap-3 border-l-2 px-4 py-2.5 transition-colors duration-150 ease-console hover:bg-hover ${
          isActive ? `${accentBorder[accent]} bg-raised text-primary` : 'border-transparent text-secondary'
        }`
      }
    >
      {item.index ? (
        <span className={`font-mono text-[0.68rem] tracking-[0.14em] ${accentText[accent]}`}>{item.index}</span>
      ) : (
        <span className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary" aria-hidden="true">
          //
        </span>
      )}
      <span className="font-display text-lg uppercase tracking-[0.08em] group-hover:text-primary">{item.label}</span>
    </NavLink>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function LeftRail({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-void/70 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        id="primary-nav"
        className={`fixed inset-y-0 left-0 z-50 flex w-[var(--rail-width)] flex-col border-r border-hairline bg-panel transition-transform duration-200 ease-console md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Primary"
      >
        <NavLink to="/" onClick={onClose} className="scanlines block border-b border-hairline px-4 py-4">
          <span className="index-label block">EPOCH // ATLAS</span>
          <span className="mt-1 block font-display text-2xl uppercase leading-none tracking-[0.1em] text-primary">
            Epoch Atlas
          </span>
          <span className="mt-1 block font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
            3.3 MYA TO 2126
          </span>
        </NavLink>
        <nav className="flex-1 overflow-y-auto py-3" aria-label="Movements">
          <div className="px-4 pb-1 pt-2 font-mono text-[0.62rem] tracking-[0.16em] text-secondary">MOVEMENTS</div>
          {MOVEMENTS.map((m) => (
            <RailLink key={m.to} item={m} onNavigate={onClose} />
          ))}
          <div className="px-4 pb-1 pt-5 font-mono text-[0.62rem] tracking-[0.16em] text-secondary">REFERENCE</div>
          {UTILITIES.map((m) => (
            <RailLink key={m.to} item={m} onNavigate={onClose} />
          ))}
        </nav>
        <div className="border-t border-hairline px-4 py-3 font-mono text-[0.62rem] leading-relaxed tracking-[0.1em] text-secondary">
          <div>STATIC // OFFLINE READY</div>
          <div>MIT // 2026</div>
        </div>
      </aside>
    </>
  );
}
