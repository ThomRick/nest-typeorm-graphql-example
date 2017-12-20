import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { schema } from './schemas/schema';

async function bootstrap() {
  const instance = ExpressAdapter.create();
  await start(instance);
}

async function start(instance) {
  const application: INestApplication = await NestFactory.create(AppModule, instance);
  await application.listen(5000);
  console.log('NestApplication started and listen on port 5000');
}

bootstrap();
