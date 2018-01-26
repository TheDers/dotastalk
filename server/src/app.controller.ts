import { Get, Controller, Post,Body } from '@nestjs/common';


@Controller('file')
export class AppController {
  @Get()
  getFile(): string {
    return 'Hello World!';
  }

  @Post()
  async create(@Body() payload: any) {
    return payload``
  }
}
