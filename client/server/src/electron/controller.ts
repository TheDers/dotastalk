import { Controller, Get } from '@nestjs/common';
import { app, BrowserWindow } from 'electron';

@Controller('electron')
export class ElectronController {

  @Get()
  findAll() {
    console.log(app, 'wow');
    return ['', app];
  }
}
