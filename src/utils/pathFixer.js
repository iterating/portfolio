/**
 * Path Fixer Utility
 * 
 * This utility helps fix image and asset paths in the application
 * to ensure they work correctly in both development and production.
 */

import { config } from '../config';

/**
 * Fix an individual image or asset path
 * @param {string} path - Original asset path
 * @returns {string} - Fixed path with correct base path
 */
export const fixPath = (path) => {
  if (!path) return '';
  
  // Skip if already absolute URL or data URL
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Skip if already includes the base path
  if (config.basePath && path.startsWith(config.basePath)) return path;
  
  // Use the config utility to get the correct path
  return config.getAssetPath(path);
};

/**
 * Hook to use with image sources in components
 * @param {string} src - Original source path
 * @returns {string} - Fixed image source path
 */
export const useFixedImagePath = (src) => {
  return fixPath(src);
};

export default {
  fixPath,
  useFixedImagePath
};
