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
    
    // Special configuration for JSX files
    build: {
      outDir: 'dist',
      sourcemap: true,
      assetsDir: 'assets',
      // Force JSX files to be processed as JS
      rollupOptions: {
        input: 'index.html',
        output: {
          format: 'es',
          // Use .js extension for all output files
          entryFileNames: 'assets/js/[name]-[hash].js',
          chunkFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({name}) => {
            // Put CSS files in their own directory
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            // Put image files in their own directory
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name ?? '')) {
              return 'assets/img/[name]-[hash][extname]';
            }
            // Default
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    },
    
    // Ensure correct file resolution
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
    },
    
    // Development server configuration
    server: {
      port: 3000,
      strictPort: true,
      open: true
    }
  };
});