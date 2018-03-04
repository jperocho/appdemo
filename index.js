const path = require('path');
const electron = require('electron');

const {
    app,
    BrowserWindow,
    nativeImage
} = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        icon: nativeImage.createFromPath( path.join(__dirname, '/icon.png') )
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
})