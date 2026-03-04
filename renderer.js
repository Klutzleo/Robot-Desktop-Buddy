const { ipcRenderer } = require('electron');

// State
let battery = 100;
let collapsed = false;
let lastMessageTime = 0;

// DOM elements
const robot = document.getElementById('robot');
const batteryFill = document.getElementById('battery-fill');
const batteryPercent = document.getElementById('battery-percent');
const message = document.getElementById('message');

// Toggle click-through based on whether mouse is over an interactive element
document.addEventListener('mousemove', (e) => {
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const isInteractive = el && el.closest('button, #battery-container, #message');
  ipcRenderer.send('set-ignore-mouse-events', !isInteractive);
});

// Listen for real system idle time from main process
ipcRenderer.on('idle-time', (event, idleMs) => {
  if (idleMs < 2000) {
    // User is actively working — drain battery
    if (battery > 0) {
      battery = Math.max(0, battery - 0.3);
      updateUI();
    }
  } else if (idleMs > 5000 && battery < 100) {
    // User has been idle 5+ seconds — recharge
    battery = Math.min(100, battery + 0.5);
    updateUI();
  }
});

// Listen for text improvement hotkey
ipcRenderer.on('improve-text', () => {
  if (!collapsed) {
    setMessage("Text improvement activated! (Feature coming soon...)");
  }
});

// Set message with cooldown to prevent spam
function setMessage(text, force = false) {
  const now = Date.now();
  if (force || now - lastMessageTime > 3000) {
    message.textContent = text;
    lastMessageTime = now;
  }
}

// Update UI based on battery level
function updateUI() {
  // Update battery bar
  batteryFill.style.width = `${battery}%`;
  batteryPercent.textContent = `${Math.floor(battery)}%`;
  
  // Battery color
  if (battery > 50) {
    batteryFill.style.background = '#22c55e'; // Green
  } else if (battery > 25) {
    batteryFill.style.background = '#eab308'; // Yellow
  } else if (battery > 10) {
    batteryFill.style.background = '#f97316'; // Orange
  } else {
    batteryFill.style.background = '#ef4444'; // Red
  }

  // Robot state transitions
  if (battery === 0 && !collapsed) {
    robot.className = 'collapsed';
    setMessage("I need... a break... *collapses*", true);
    collapsed = true;
  } else if (battery > 0 && collapsed) {
    robot.className = 'happy';
    setMessage("Oh thank god! I thought we were gonna die together!", true);
    collapsed = false;
  } else if (battery > 75) {
    if (robot.className !== 'happy') {
      robot.className = 'happy';
    }
    // Don't override important messages
    if (!message.textContent.includes('collapse') && 
        !message.textContent.includes('thank god') &&
        !message.textContent.includes('Text improvement')) {
      setMessage("Feeling great! Love the energy!");
    }
  } else if (battery > 50) {
    if (robot.className !== 'normal') {
      robot.className = 'normal';
    }
    if (!message.textContent.includes('thank god') &&
        !message.textContent.includes('Text improvement')) {
      setMessage("Doing good! Keep it up!");
    }
  } else if (battery > 25) {
    if (robot.className !== 'tired') {
      robot.className = 'tired';
      setMessage("Hey... I'm getting a little tired here...", true);
    }
  } else if (battery > 10) {
    if (robot.className !== 'critical') {
      robot.className = 'critical';
      setMessage("Seriously, I need a break soon.", true);
    }
  } else if (battery > 0) {
    if (robot.className !== 'critical') {
      robot.className = 'critical';
    }
    setMessage("I don't feel so good... *wobbles*", true);
  }
}

// Initialize
console.log('Robot Buddy initialized!');
console.log('Try pressing Ctrl+Shift+B for text improvement!');
console.log('Click in this window and type to drain battery!');
console.log('Stop typing for 5 seconds to recharge!');

// Initial UI update
updateUI();
