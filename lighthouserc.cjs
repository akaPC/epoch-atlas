module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview -- --port 4175 --strictPort',
      startServerReadyPattern: 'Local',
      url: ['http://localhost:4175/epoch-atlas/'],
      numberOfRuns: 2,
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox --headless=new',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
