import { NavLink } from 'react-router-dom';

const items = [
  { to: '/record', label: 'Timeline', end: true },
  { to: '/record/graph', label: 'Dependency graph' },
  { to: '/record/domains', label: 'Domain lenses' },
  { to: '/record/acceleration', label: 'Acceleration' },
];

export function RecordNav() {
  return (
    <nav aria-label="The Record sections" className="mb-6 flex flex-wrap gap-2">
      {items.map((i) => (
        <NavLink key={i.to} to={i.to} end={i.end} className={({ isActive }) => `btn ${isActive ? 'btn--active' : ''}`}>
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
}
