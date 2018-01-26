import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

function addMiddleware(instance): void {
  instance.use(bodyParser.json());
  instance.use(cors());
}

function setUpExpress(): void {
  const instance = express();
  addMiddleware(instance);
  return instance;
}

export async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, setUpExpress());
  await app.listen(3000);
}
