import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';

const server: express.Express = express();

export const createNestserver = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
  );
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
      //transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.init();
};

createNestserver(server)
  .then(() => console.log('Report server is working.... '))
  .catch((err) => console.log('Report server is broken', err));

export const reportLela: functions.HttpsFunction =
  functions.https.onRequest(server);
