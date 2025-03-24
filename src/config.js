/**
 * Configuration module for the portfolio site
 * This handles environment-specific paths and configuration
 */

// Detect if we're in development or production environment
const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';

/**
 * Central configuration object for the application
 */
export const config = {
  // Base path for assets - empty in development, '/jy-portfolio' in production
  basePath: isDev ? '' : '/jy-portfolio',
  
  /**
   * Helper function to get the correct path for assets
   * @param {string} path - The relative path to the asset
   * @returns {string} - The full path including base path if needed
   */
  getAssetPath: (path) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${config.basePath}/${cleanPath}`;
  }
};

export default config;