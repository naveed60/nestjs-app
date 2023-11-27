import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response  } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
 console.log('this is the middleware Number 1 !')
 next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  await app.listen(3000);
}
bootstrap();
