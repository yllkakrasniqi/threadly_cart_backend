import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)
  const port = configService.get<number>('port')
  const cors_origin = configService.get<string>('cors_origin')

  app.enableCors({
    origin: cors_origin, // or true to allow all origins
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })

  await app.listen(port);
}
bootstrap();
