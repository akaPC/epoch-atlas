import { useEffect, useState } from 'react';

function format(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}Z`;
}

export function UtcClock() {
  const [now, setNow] = useState(() => format(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setNow(format(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <time className="font-mono text-[0.7rem] tracking-[0.12em] text-secondary" dateTime={now} aria-label="Current UTC time">
      {now}
    </time>
  );
}
