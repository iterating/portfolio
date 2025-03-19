import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get base URL for GitHub Pages from package.json
  let base = '/';
  try {
    const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
    if (pkg.homepage) {
      // Extract repository name from GitHub Pages URL
      const homepageUrl = pkg.homepage.trim();
      if (homepageUrl.includes('github.io')) {
        try {
          const url = new URL(homepageUrl);
          base = url.pathname;
        } catch (e) {
          // If URL parsing fails, use the homepage value directly
          base = homepageUrl.startsWith('/') ? homepageUrl : `/${homepageUrl}`;
        }
      }
    }
  } catch (e) {
    console.error('Error reading package.json:', e);
  }

  return {
    plugins: [react()],
    base: mode === 'production' ? base : '/',
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  };
});