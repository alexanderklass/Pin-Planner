const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        roundedCorners: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL('http://localhost:3000');
    //win.loadFile(path.join(__dirname, '../electron-app/public/index.html'));
}

app.whenReady().then(createWindow);
