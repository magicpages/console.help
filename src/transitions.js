/**
 * Simple page transition helper
 * - Uses a class-based approach to control visibility
 * - Works by delaying navigation until preloader is visible
 */

export function initPageTransitions() {
  // Wait for fonts to load
  document.fonts.ready.then(() => {
    // Mark fonts as loaded
    document.documentElement.classList.add('fonts-loaded');
    
    // After a delay, hide preloader
    setTimeout(hidePreloader, 200);
  });
  
  // Setup navigation interception
  setupNavLinks();
  
  // Add page load class for CSS transitions
  document.documentElement.classList.add('page-loaded');
}

// Hide preloader with animation
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
  
  // Remove no-fouc class to show content
  document.body.classList.remove('no-fouc');
}

// Setup navigation link interception
function setupNavLinks() {
  document.addEventListener('click', e => {
    // Find target link
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
      if (!target) return;
    }
    
    // Only handle internal links
    const href = target.getAttribute('href');
    const isInternalLink = href && 
                          href.startsWith('/') && 
                          !href.startsWith('//') && 
                          !e.ctrlKey && 
                          !e.metaKey;
    
    if (!isInternalLink) return;
    
    // Prevent default navigation
    e.preventDefault();
    
    // Show preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '1';
      preloader.style.visibility = 'visible';
    }
    
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });
} 