import "./styles/main.css";

// Import navigation helper
import { setupNavigation } from './navigation.js';

// Import transitions
import { initPageTransitions } from './transitions.js';

// Font loading detection
document.fonts.ready.then(() => {
  console.log('Fonts loaded in how page');
  document.documentElement.classList.add('fonts-loaded');
  
  // Hide preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.classList.remove('no-fouc');
    }, 300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('How page loaded');
  
  // Initialize page transitions
  initPageTransitions();
});

// Add analytics
const analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.dataset.domain = "console.help";
analyticsScript.src = "https://stats.fedoruk-betschki.com/js/script.js";
document.head.appendChild(analyticsScript);
