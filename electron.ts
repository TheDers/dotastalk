import { app, BrowserWindow } from 'electron';

import { bootstrap } from './server/src/main';


bootstrap().then(() => console.log('vtec just kicked in yo.'));


class Electron {
  public win: any = null;

  constructor() {
    this.onInit();
  }

  public createWindow() {
    this.win = new BrowserWindow({
      width: 600,
      height: 600,
      backgroundColor: '#ffffff',
      icon: `file://${__dirname}/client/dist/assets/logo.png`,
    });
    this.win.loadURL(`file://${__dirname}/client/dist/index.html`);
    this.win.on('closed', () => {
      this.win = null;
    });
  };

  public onInit(): void {
    app.on('ready', this.createWindow);

    app.on('window-all-closed', () => {
      if (process.platform === 'darwin') return false;
      app.quit();
    });

    app.on('activate', () => {
      if (this.win !== null) return false;
      this.createWindow();
    });
  }
}

const electron = new Electron();


