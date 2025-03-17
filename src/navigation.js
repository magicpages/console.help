// Page transition helper
export function setupPageTransitions() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  document.body.appendChild(overlay);

  // Intercept all internal link clicks
  document.addEventListener('click', (e) => {
    // Find clicked element that is or is inside an anchor tag
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
      if (!target || target === document) return;
    }
    
    // If we found an anchor tag
    if (target && target.tagName === 'A') {
      // Only handle internal links
      const href = target.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        
        // Add transition class to html
        document.documentElement.classList.add('transition');
        
        // Fade out current page
        document.body.classList.add('page-transition-out');
        
        // Show overlay
        overlay.classList.add('active');
        
        // Navigate after a short delay
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    }
  });
}

// Handle page load animations
export function handlePageLoad() {
  // Add transition class to html
  document.documentElement.classList.add('transition');
  
  // Hide overlay when page is loaded
  const overlay = document.getElementById('page-transition-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
  
  // Remove transition out class if it exists
  document.body.classList.remove('page-transition-out');
  
  // Remove transition class after a delay
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 500);
}

// Simple navigation enhancement
export function setupNavigation() {
  document.addEventListener('click', (e) => {
    // Find if we clicked on an internal link
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
      if (!target || target === document) return;
    }
    
    const href = target.getAttribute('href');
    
    // Only handle internal links
    if (target.tagName === 'A' && 
        href && 
        href.startsWith('/') && 
        !href.startsWith('//') && 
        !e.ctrlKey && 
        !e.metaKey) {
      
      e.preventDefault();
      
      // Show preloader before navigation
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.display = 'flex';
        preloader.style.opacity = '1';
        
        // Add the no-fouc class to body to prevent content flash
        document.body.classList.add('no-fouc');
        
        // Navigate after a short delay
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      } else {
        // Fallback if preloader doesn't exist
        window.location.href = href;
      }
    }
  });
} 