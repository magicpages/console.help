// Browser detection function
function detectBrowser() {
  const userAgent = navigator.userAgent;
  console.log("User Agent:", userAgent);
  
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

// OS detection function
function detectOS() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf("Android") > -1) {
    return "android";
  } else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1 || userAgent.indexOf("iPod") > -1) {
    return "ios";
  } else if (userAgent.indexOf("Win") > -1) {
    return "windows";
  } else if (userAgent.indexOf("Mac") > -1) {
    return "mac";
  } else if (userAgent.indexOf("Linux") > -1 || userAgent.indexOf("X11") > -1) {
    return "linux";
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
    },
    android: {
      shortcut: "Remote Debugging Required",
      rightClick: [
        "Developer console is not available directly on mobile devices",
        "Use Remote Debugging to inspect your mobile browser from a computer:",
        "1. Connect your Android device to your computer via USB",
        "2. On your computer, open Chrome and navigate to chrome://inspect",
        "3. Enable USB debugging on your Android device",
        "4. Your device should appear in the list of remote targets"
      ],
      remoteDebuggingLink: "https://developer.chrome.com/docs/devtools/remote-debugging"
    },
    ios: {
      shortcut: "Remote Debugging Required",
      rightClick: [
        "Developer console is not available directly on mobile devices",
        "Use Safari on macOS to inspect your iOS browser:",
        "1. Connect your iOS device to your Mac via USB",
        "2. Enable Web Inspector in Safari settings on iOS",
        "3. Open Safari on macOS and enable the Develop menu",
        "4. Your iOS device should appear in the Develop menu"
      ],
      remoteDebuggingLink: "https://webkit.org/web-inspector/remote-debugging/"
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
    },
    android: {
      shortcut: "Remote Debugging Required",
      rightClick: [
        "Developer console is not available directly on mobile devices",
        "Use Firefox's Remote Debugging to connect from a computer:",
        "1. Enable Remote Debugging in Firefox for Android",
        "2. Connect your device to your computer via USB",
        "3. In Firefox on your computer, open about:debugging",
        "4. Connect to your device from there"
      ],
      remoteDebuggingLink: "https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/"
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
  },
  samsung: {
    name: "Samsung Internet",
    android: {
      shortcut: "Remote Debugging Required",
      rightClick: [
        "Developer console is not available directly on mobile devices",
        "Use Chrome DevTools to debug Samsung Internet:",
        "1. Enable USB debugging on your Android device",
        "2. Connect your device to your computer via USB",
        "3. Open Chrome on your computer and go to chrome://inspect",
        "4. Your Samsung Internet tabs should appear in the list"
      ],
      remoteDebuggingLink: "https://developer.samsung.com/internet/android/remote-debugging.html"
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

// Format keyboard shortcuts with styled spans
function formatShortcut(shortcut, os) {
  if (typeof shortcut !== 'string') return shortcut;
  
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

// Update the UI with detected browser and OS
function updateUI() {
  try {
    console.log("Updating UI...");
    const browserName = detectBrowser();
    const osName = detectOS();
    
    console.log("Detected browser:", browserName);
    console.log("Detected OS:", osName);
    
    // Update browser name
    const browserElement = document.getElementById("browser-name");
    if (browserElement) {
      browserElement.textContent = consoleInfo[browserName]?.name || browserName;
    } else {
      console.error("Could not find browser-name element");
    }
    
    // Update OS name
    const osElement = document.getElementById("os-name");
    if (osElement) {
      osElement.textContent = formatOSName(osName);
    } else {
      console.error("Could not find os-name element");
    }
    
    // Get browser/OS specific info
    const browserInfo = consoleInfo[browserName];
    const osInfo = browserInfo?.[osName];
    
    // Update keyboard shortcut
    const shortcutElement = document.getElementById("keyboard-shortcut");
    if (shortcutElement) {
      if (osInfo?.shortcut) {
        shortcutElement.innerHTML = formatShortcut(osInfo.shortcut, osName);
      } else {
        shortcutElement.textContent = "Not available for this browser/OS combination";
      }
    } else {
      console.error("Could not find keyboard-shortcut element");
    }
    
    // Update right-click method
    const rightClickElement = document.getElementById("right-click-method");
    if (rightClickElement) {
      rightClickElement.innerHTML = '';
      
      if (osInfo?.rightClick) {
        osInfo.rightClick.forEach(step => {
          const li = document.createElement("li");
          li.textContent = step;
          li.className = "mb-2";
          rightClickElement.appendChild(li);
        });
        
        // Add remote debugging link if available
        if (osInfo.remoteDebuggingLink) {
          const li = document.createElement("li");
          li.className = "mt-4";
          li.innerHTML = `<a href="${osInfo.remoteDebuggingLink}" target="_blank" 
            class="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
            📄 Official Remote Debugging Documentation
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>`;
          rightClickElement.appendChild(li);
        }
      } else {
        rightClickElement.innerHTML = '<li>Not available for this browser/OS combination</li>';
      }
    } else {
      console.error("Could not find right-click-method element");
    }
    
    // Set the select elements to match the detected values
    const browserSelect = document.getElementById("browser-select");
    const osSelect = document.getElementById("os-select");
    
    if (browserSelect) browserSelect.value = browserName;
    if (osSelect) osSelect.value = osName;
    
    // Add event listeners for the dropdown menus
    if (browserSelect && osSelect) {
      browserSelect.addEventListener("change", function() {
        updateConsoleInfo(this.value, osSelect.value);
      });
      
      osSelect.addEventListener("change", function() {
        updateConsoleInfo(browserSelect.value, this.value);
      });
    }

    // Remove loading states
    const loadingElements = document.querySelectorAll('.loading-only');
    loadingElements.forEach(el => {
      el.style.display = 'none';
    });
  } catch (error) {
    console.error("Error updating UI:", error);
  }
}

// Update console info based on dropdown selections
function updateConsoleInfo(browser, os) {
  console.log("Updating console info for:", browser, os);
  
  // Update browser name
  const browserElement = document.getElementById("browser-name");
  if (browserElement) {
    browserElement.textContent = consoleInfo[browser]?.name || browser;
  }
  
  // Update OS name
  const osElement = document.getElementById("os-name");
  if (osElement) {
    osElement.textContent = formatOSName(os);
  }
  
  // Get browser/OS specific info
  const browserInfo = consoleInfo[browser];
  const osInfo = browserInfo?.[os];
  
  // Update keyboard shortcut
  const shortcutElement = document.getElementById("keyboard-shortcut");
  if (shortcutElement) {
    if (osInfo?.shortcut) {
      shortcutElement.innerHTML = formatShortcut(osInfo.shortcut, os);
    } else {
      shortcutElement.textContent = "Not available for this browser/OS combination";
    }
  }
  
  // Update right-click method
  const rightClickElement = document.getElementById("right-click-method");
  if (rightClickElement) {
    rightClickElement.innerHTML = '';
    
    if (osInfo?.rightClick) {
      osInfo.rightClick.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        li.className = "mb-2";
        rightClickElement.appendChild(li);
      });
      
      // Add remote debugging link if available
      if (osInfo.remoteDebuggingLink) {
        const li = document.createElement("li");
        li.className = "mt-4";
        li.innerHTML = `<a href="${osInfo.remoteDebuggingLink}" target="_blank" 
          class="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
          📄 Official Remote Debugging Documentation
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>`;
        rightClickElement.appendChild(li);
      }
    } else {
      rightClickElement.innerHTML = '<li>Not available for this browser/OS combination</li>';
    }
  }
}

// Export for import in main.js
export { updateUI }; 