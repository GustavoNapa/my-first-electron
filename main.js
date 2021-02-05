const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    maximizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html');
  win.removeMenu();

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

try {
  require('electron-reloader')(module)
} catch (_) {}
