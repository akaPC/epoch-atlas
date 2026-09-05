import { NavLink } from 'react-router-dom';

const items = [
  { to: '/horizon', label: 'Fields', end: true },
  { to: '/horizon/convergence', label: 'Convergence' },
  { to: '/horizon/lifespan', label: 'You in 2076' },
];

export function HorizonNav() {
  return (
    <nav aria-label="The Horizon sections" className="mb-6 flex flex-wrap gap-2">
      {items.map((i) => (
        <NavLink key={i.to} to={i.to} end={i.end} className={({ isActive }) => `btn btn--red ${isActive ? 'btn--active' : ''}`}>
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
}
