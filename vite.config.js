import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Repository name - critical for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
    // This ensures all assets are properly built and named
    rollupOptions: {
      output: {
        // Use .js extension for all output files
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  // Override Vite's default asset handling
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'] 
  }
});