import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import constants from '../constants';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = constants.port;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('IKS HEALTH SCHEDULE CRON SERVICE')
    .setDescription('Cron service')
    .setVersion('1.0')
    .addTag('CRONS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(port);
  console.log(`server is running on port: ${port}`);
}
bootstrap();
