import { Link } from 'react-router-dom';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function NotFound() {
  useFocusLabel('ATLAS // NO RECORD', 'Not found');
  return (
    <div className="panel brackets brackets--red p-8">
      <div className="index-label index-label--red">404 // NO RECORD AT THIS ADDRESS</div>
      <h1 className="mt-2 text-4xl">Nothing filed here</h1>
      <p className="mt-3 max-w-xl text-secondary">
        The address does not match any epoch, event, forecast model or projection. Use search, or return to the
        overview.
      </p>
      <div className="mt-6 flex gap-2">
        <Link to="/" className="btn">
          Overview
        </Link>
        <Link to="/search" className="btn">
          Search
        </Link>
      </div>
    </div>
  );
}
