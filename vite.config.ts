import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { VitePWA } from 'vite-plugin-pwa';
import { execSync } from 'node:child_process';
import { fileURLToPath, URL } from 'node:url';

function gitHash(): string {
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return 'local';
  }
}

export default defineConfig({
  base: '/epoch-atlas/',
  define: {
    __BUILD_HASH__: JSON.stringify(process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 7) : gitHash()),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  plugins: [
    { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'robots.txt'],
      manifest: {
        name: 'Epoch Atlas',
        short_name: 'Epoch Atlas',
        description:
          'Interactive atlas of human technological advancement, AGI and ASI forecasting, and 100-year projections.',
        theme_color: '#05070a',
        background_color: '#05070a',
        display: 'standalone',
        start_url: '/epoch-atlas/',
        scope: '/epoch-atlas/',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff2,svg,png,webmanifest}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        navigateFallback: '/epoch-atlas/index.html',
      },
    }),
  ],
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          d3: ['d3'],
        },
      },
    },
  },
});
