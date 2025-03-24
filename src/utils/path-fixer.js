/**
 * Path Fixer Utility
 * 
 * This script automatically fixes image paths across the site by:
 * 1. Detecting if we're in development or production environment
 * 2. Adjusting asset paths to include the correct base path
 * 3. Scanning the DOM for img tags and updating src attributes
 */

import { config } from '../config';

// Main function to fix all image paths in the DOM
export function fixImagePaths() {
  // Find all images in the document
  const images = document.querySelectorAll('img');
  
  // Process each image
  images.forEach(img => {
    const currentSrc = img.getAttribute('src');
    if (!currentSrc) return;
    
    // Skip images that are already using absolute URLs
    if (currentSrc.startsWith('http') || currentSrc.startsWith('data:')) return;
    
    // Skip images that already include the base path
    if (config.basePath && currentSrc.startsWith(config.basePath)) return;
    
    // Fix the path by removing any leading './' and applying the config
    let cleanPath = currentSrc;
    if (cleanPath.startsWith('./')) {
      cleanPath = cleanPath.substring(2);
    } else if (cleanPath.startsWith('../')) {
      // Handle relative paths going up a directory
      cleanPath = cleanPath.replace(/^\.\.\/+/, '');
    }
    
    // Update the src attribute with the corrected path
    img.setAttribute('src', config.getAssetPath(cleanPath));
  });
  
  // Also fix background images in style attributes
  const elementsWithBgImage = document.querySelectorAll('[style*="background-image"]');
  elementsWithBgImage.forEach(el => {
    const style = el.getAttribute('style');
    if (!style) return;
    
    // Extract the URL from the background-image property
    const match = style.match(/background-image:\s*url\(['"]?([^'"()]*)['"]?\)/i);
    if (match && match[1]) {
      const imgPath = match[1];
      
      // Skip images that are already using absolute URLs
      if (imgPath.startsWith('http') || imgPath.startsWith('data:')) return;
      
      // Skip images that already include the base path
      if (config.basePath && imgPath.startsWith(config.basePath)) return;
      
      // Fix the path and update the style attribute
      let cleanPath = imgPath;
      if (cleanPath.startsWith('./')) {
        cleanPath = cleanPath.substring(2);
      } else if (cleanPath.startsWith('../')) {
        cleanPath = cleanPath.replace(/^\.\.\/+/, '');
      }
      
      const newStyle = style.replace(
        /background-image:\s*url\(['"]?([^'"()]*)['"]?\)/i,
        `background-image: url('${config.getAssetPath(cleanPath)}')`
      );
      el.setAttribute('style', newStyle);
    }
  });
  
  // Also update link hrefs for asset links (like favicons, etc)
  const assetLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
  assetLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Skip links that are already using absolute URLs
    if (href.startsWith('http') || href.startsWith('data:')) return;
    
    // Skip links that already include the base path
    if (config.basePath && href.startsWith(config.basePath)) return;
    
    // Fix the path
    let cleanPath = href;
    if (cleanPath.startsWith('./')) {
      cleanPath = cleanPath.substring(2);
    } else if (cleanPath.startsWith('../')) {
      cleanPath = cleanPath.replace(/^\.\.\/+/, '');
    }
    
    link.setAttribute('href', config.getAssetPath(cleanPath));
  });
}

// Auto-run when imported
export function initPathFixer() {
  // Run once DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixImagePaths);
  } else {
    fixImagePaths();
  }
  
  // Also run when dynamic content might be loaded
  window.addEventListener('load', fixImagePaths);
}

export default { fixImagePaths, initPathFixer };
