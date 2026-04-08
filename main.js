const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

const configPath = path.join(__dirname, 'config.json');

// Cargar configuración
function loadConfig() {
  try {
    const data = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return getDefaultConfig();
  }
}

function getDefaultConfig() {
  return {
    appName: 'UI Customizer',
    bgColor: '#1a1a1a',
    textColor: '#ffffff',
    accentColor: '#00bfff',
    fontSize: 16,
    borderRadius: 8,
    iconPath: '📎',
    iconImage: null,
    emojiIngresos: '💰',
    emojiOrdenes: '📦',
    emojiClientes: '👥',
    emojiCrecimiento: '📈',
    chartColor: '#00bfff',
    barColor: '#4ade80',
    statusCompletedColor: '#4ade80',
    statusPendingColor: '#ffc107',
    statusProcessingColor: '#00bfff'
  };
}

function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'assets', 'icon.ico')
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  if (process.argv.includes('--dev')) {
    mainWindow.webDevTools.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC Handlers
ipcMain.handle('get-config', () => {
  return loadConfig();
});

ipcMain.handle('save-config', (event, config) => {
  saveConfig(config);
  mainWindow.webContents.send('config-updated', config);
  return { success: true };
});

ipcMain.handle('reset-config', () => {
  const defaultConfig = getDefaultConfig();
  saveConfig(defaultConfig);
  mainWindow.webContents.send('config-updated', defaultConfig);
  return defaultConfig;
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
