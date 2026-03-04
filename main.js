const { app, BrowserWindow, screen, globalShortcut, ipcMain, powerMonitor } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Get screen dimensions
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
  // Create transparent, always-on-top window
  mainWindow = new BrowserWindow({
    width: 200,
    height: 250,
    x: width - 220,  // Position in bottom-right corner
    y: height - 270,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the renderer
  mainWindow.loadFile('index.html');

  // Make window click-through except for interactive elements
  mainWindow.setIgnoreMouseEvents(true, { forward: true });

  // Open DevTools in development (uncomment for debugging)
  // mainWindow.webContents.openDevTools({ mode: 'detach' });

  // Register global hotkey for text improvement (Ctrl+Shift+B)
  globalShortcut.register('CommandOrControl+Shift+B', () => {
    console.log('Text improvement hotkey pressed!');
    mainWindow.webContents.send('improve-text');
  });
}

app.disableHardwareAcceleration();

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('set-ignore-mouse-events', (event, ignore) => {
    mainWindow.setIgnoreMouseEvents(ignore, { forward: true });
  });

  // Send real system-wide idle time to renderer every second
  setInterval(() => {
    if (mainWindow) {
      const idleSeconds = powerMonitor.getSystemIdleTime();
      mainWindow.webContents.send('idle-time', idleSeconds * 1000);
    }
  }, 1000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll();
});
