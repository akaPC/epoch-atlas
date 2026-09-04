import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--bg-void)',
        panel: 'var(--bg-panel)',
        raised: 'var(--bg-raised)',
        hover: 'var(--bg-hover)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        cyan: { DEFAULT: 'var(--accent-cyan)', dim: 'var(--accent-cyan-dim)' },
        amber: { DEFAULT: 'var(--accent-amber)', dim: 'var(--accent-amber-dim)' },
        red: { DEFAULT: 'var(--accent-red)', dim: 'var(--accent-red-dim)' },
        hairline: 'var(--hairline)',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { widest2: '0.18em' },
      transitionDuration: { 150: '150ms', 200: '200ms', 250: '250ms' },
      transitionTimingFunction: { console: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
      boxShadow: {
        glow: '0 0 0 1px var(--accent-cyan-dim), 0 0 24px rgba(34,211,238,0.12)',
        'glow-amber': '0 0 0 1px var(--accent-amber-dim), 0 0 24px rgba(245,182,37,0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
