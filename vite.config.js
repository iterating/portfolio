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
    plugins: [
      react({
        // Ensure JSX is correctly transpiled
        include: '**/*.{jsx,tsx}',
        babel: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
          ]
        }
      })
    ],
    base: mode === 'production' ? base : '/',
    build: {
      outDir: 'dist',
      sourcemap: true,
      // Ensure correct MIME types
      rollupOptions: {
        output: {
          // Ensure correct chunks and filenames
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          // Ensure JSX is treated as JavaScript
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    // Serve all JSX files with the correct MIME type
    server: {
      headers: {
        'Content-Type': 'application/javascript'
      }
    },
    // Ensure Vite knows how to resolve .jsx files
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  };
});