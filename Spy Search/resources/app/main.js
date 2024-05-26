const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');

app.on('ready', () => {
  protocol.registerFileProtocol('file', (request, callback) => {
    const url = request.url.substr(8); // Remove "file://" from the beginning
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  });
});

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 550,
    minWidth: 500,
    minHeight: 400,
    backgroundColor: '#f0f0f0',
    title: 'Spy Search',
    frame: false, // Remover a borda da janela
    movable: true, // permite que a janela seja movida pela tela.
    resizable: true, // Aqui você define se a janela é redimensionável ou não
  });

  win.loadURL('file://' + __dirname + '/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
