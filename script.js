// Browser and OS detection
function detectBrowser() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf("Firefox") > -1) {
    return "firefox";
  } else if (userAgent.indexOf("SamsungBrowser") > -1) {
    return "samsung";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    return "opera";
  } else if (userAgent.indexOf("Trident") > -1) {
    return "ie";
  } else if (userAgent.indexOf("Edg") > -1) {
    return "edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    return "chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "safari";
  } else {
    return "unknown";
  }
}

function detectOS() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf("Win") > -1) {
    return "windows";
  } else if (userAgent.indexOf("Mac") > -1) {
    return "mac";
  } else if (userAgent.indexOf("Linux") > -1 || userAgent.indexOf("X11") > -1) {
    return "linux";
  } else if (userAgent.indexOf("Android") > -1) {
    return "android";
  } else if (userAgent.indexOf("iOS") > -1 || userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1) {
    return "ios";
  } else {
    return "unknown";
  }
}

// Console information by browser/OS
const consoleInfo = {
  chrome: {
    name: "Google Chrome",
    windows: {
      shortcut: "Ctrl + Shift + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    mac: {
      shortcut: "Cmd + Option + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    linux: {
      shortcut: "Ctrl + Shift + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    }
  },
  firefox: {
    name: "Firefox",
    windows: {
      shortcut: "Ctrl + Shift + K",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect Element' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    mac: {
      shortcut: "Cmd + Option + K",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect Element' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    linux: {
      shortcut: "Ctrl + Shift + K",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect Element' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    }
  },
  safari: {
    name: "Safari",
    mac: {
      shortcut: "Cmd + Option + C",
      rightClick: [
        "First enable Developer Tools: Safari > Preferences > Advanced > Check 'Show Develop menu'",
        "Then use Develop > Show JavaScript Console from the menu bar",
        "Or use the keyboard shortcut Cmd + Option + C once enabled"
      ]
    }
  },
  edge: {
    name: "Microsoft Edge",
    windows: {
      shortcut: "F12 or Ctrl + Shift + J",
      shortcutDisplay: ["F12", "Ctrl + Shift + J"],
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    mac: {
      shortcut: "Cmd + Option + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    }
  },
  opera: {
    name: "Opera",
    windows: {
      shortcut: "Ctrl + Shift + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    mac: {
      shortcut: "Cmd + Option + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    },
    linux: {
      shortcut: "Ctrl + Shift + J",
      rightClick: [
        "Right-click anywhere on the page",
        "Select 'Inspect' from the menu",
        "Click on the 'Console' tab at the top of the developer tools panel"
      ]
    }
  },
  ie: {
    name: "Internet Explorer",
    windows: {
      shortcut: "F12",
      rightClick: [
        "Press F12 to open Developer Tools",
        "Click on the Console tab",
        "Alternative: Navigate to Settings > F12 Developer Tools, then click Console tab"
      ]
    }
  }
};

// Format OS name for display
function formatOSName(os) {
  switch (os) {
    case "windows": return "Windows";
    case "mac": return "macOS";
    case "linux": return "Linux";
    case "android": return "Android";
    case "ios": return "iOS";
    default: return "Unknown OS";
  }
}

// Format keyboard shortcuts with styled spans and Mac symbols
function formatShortcut(shortcut, os) {
  // Handle arrays of shortcuts (for multiple options)
  if (Array.isArray(shortcut)) {
    return shortcut.map(s => formatSingleShortcut(s, os))
      .join('<span class="or-separator"> or </span>');
  }
  
  // Handle single shortcut that might contain "or" text
  if (typeof shortcut === 'string' && shortcut.includes(' or ')) {
    const parts = shortcut.split(' or ');
    return parts.map(s => formatSingleShortcut(s.trim(), os))
      .join('<span class="or-separator"> or </span>');
  }
  
  // Handle regular shortcut
  return formatSingleShortcut(shortcut, os);
}

function formatSingleShortcut(shortcut, os) {
  // Replace Mac keyboard symbols if on macOS
  if (os === "mac") {
    shortcut = shortcut
      .replace(/Cmd/g, "⌘")
      .replace(/Option/g, "⌥")
      .replace(/Shift/g, "⇧")
      .replace(/Ctrl/g, "⌃");
  }
  
  return shortcut.split(' + ').map(key => 
    `<span class="key">${key}</span>`
  ).join(' + ');
}

// Update the page with the detected info
function updateConsoleInfo(browser, os) {
  const browserNameElement = document.getElementById("browser-name");
  const osNameElement = document.getElementById("os-name");
  const keyboardShortcutElement = document.getElementById("keyboard-shortcut");
  const rightClickMethodElement = document.getElementById("right-click-method");
  
  // Update browser and OS names
  if (consoleInfo[browser]) {
    browserNameElement.textContent = consoleInfo[browser].name;
    browserNameElement.classList.add('highlight');
  } else {
    browserNameElement.textContent = "your browser";
    browserNameElement.classList.remove('highlight');
  }
  
  osNameElement.textContent = formatOSName(os);
  osNameElement.classList.add('highlight');
  
  // Check if we have info for this browser/OS combination
  if (consoleInfo[browser] && consoleInfo[browser][os]) {
    // Use shortcutDisplay if available, otherwise fall back to shortcut
    const shortcutToUse = consoleInfo[browser][os].shortcutDisplay || consoleInfo[browser][os].shortcut;
    keyboardShortcutElement.innerHTML = formatShortcut(shortcutToUse, os);
    
    // Update right-click method
    rightClickMethodElement.innerHTML = '';
    consoleInfo[browser][os].rightClick.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      li.className = "mb-2";
      rightClickMethodElement.appendChild(li);
    });
  } else {
    keyboardShortcutElement.textContent = "Not available for this browser/OS combination";
    rightClickMethodElement.innerHTML = '<li>Not available for this browser/OS combination</li>';
  }
  
  // Set the select elements to match the detected values
  document.getElementById("browser-select").value = browser;
  document.getElementById("os-select").value = os;
}

// For copying the shortcut to clipboard with modern notification
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  // Get just the text content, not the HTML
  const text = element.textContent;
  
  navigator.clipboard.writeText(text)
    .then(() => {
      // Create a toast notification instead of alert
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300 flex items-center';
      toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Copied to clipboard: ${text}
      `;
      document.body.appendChild(toast);
      
      // Remove the toast after 3 seconds
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  const browser = detectBrowser();
  const os = detectOS();
  
  updateConsoleInfo(browser, os);
  
  // Add event listeners for the dropdown menus
  document.getElementById("browser-select").addEventListener("change", function() {
    updateConsoleInfo(this.value, document.getElementById("os-select").value);
  });
  
  document.getElementById("os-select").addEventListener("change", function() {
    updateConsoleInfo(document.getElementById("browser-select").value, this.value);
  });
  
  // Add Magic Pages attribution with animation
  setTimeout(() => {
    const attribution = document.querySelector('a[href="https://www.magicpages.co/"]');
    if (attribution) {
      attribution.classList.add('animate-pulse');
      setTimeout(() => {
        attribution.classList.remove('animate-pulse');
      }, 2000);
    }
  }, 3000);
}); 