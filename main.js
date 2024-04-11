const {app, BrowserWindow} = require("electron");

//const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1200,
        roundedCorners: true,
        frame: false,
        webPreferences: {
            enableRemoteModules: true,
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: `${__dirname}/public/favicon.png`,
    });

    win.loadURL("http://localhost:3000");
    //win.loadFile(path.join(__dirname, '../electron-app/public/index.html'));
}

app.whenReady().then(createWindow);
