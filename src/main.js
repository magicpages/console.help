import "./styles/main.css";

// Import the new detector
import { updateUI } from './detector.js';

// Import navigation helper
import { setupNavigation } from './navigation.js';

// Import transitions
import { initPageTransitions } from './transitions.js';

// Font loading detection
document.fonts.ready.then(() => {
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

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize page transitions
  initPageTransitions();
  
  // Get content elements
  const shortcutContent = document.getElementById('keyboard-shortcut');
  const methodContent = document.getElementById('right-click-method');
  const browserNameSpan = document.getElementById('browser-name');
  const osNameSpan = document.getElementById('os-name');
  
  // Set content to be initially invisible using Tailwind classes
  document.querySelectorAll('.content-loader').forEach(el => {
    el.classList.add('opacity-0');
  });
  
  // Detect and update content
  updateUI();
  
  // After a small delay, make content visible with a smooth transition
  setTimeout(() => {
    document.querySelectorAll('.content-loader').forEach(el => {
      el.classList.add('opacity-100', 'transition-opacity', 'duration-300');
      el.classList.remove('opacity-0');
    });
  }, 100);
});

// Add analytics
const analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.dataset.domain = "console.help";
analyticsScript.src = "https://stats.fedoruk-betschki.com/js/script.js";
document.head.appendChild(analyticsScript);
