import { Get, Controller } from '@nestjs/common';

import { app, BrowserWindow } from 'electron';
@Controller()
export class AppController {
  @Get()
  root(): any {
    console.log(app);
    return app;
  }
}
