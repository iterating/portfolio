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
  // Base path for assets - empty in development, '' in production to deploy to github pages root ('/portfolio' to deploy to portfolio repo)
  basePath: isDev ? '' : '',
  
  /**
   * Helper function to get the correct path for assets
   * @param {string} path - The relative path to the asset
   * @returns {string} - The full path including base path if needed
   */
  getAssetPath: (path) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // Handle the specific case where assets are in /assets/images directly
    if (cleanPath.startsWith('assets/')) {
      return `${config.basePath}/${cleanPath}`;
    }
    
    // For any other path, append to the base path
    return `${config.basePath}/${cleanPath}`;
  }
};

export default config;