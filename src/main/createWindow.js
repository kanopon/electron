import  { BrowserWindow } from "electron";

let win;
function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/../../index.html`);
    win.on("closed",() => {
        win = null;
    });    
}

export default createWindow;
