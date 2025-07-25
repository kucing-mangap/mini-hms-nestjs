import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe( { whitelist: true }))

  const config = new DocumentBuilder()
    .setTitle('Mini SIMRS')
    .setDescription('The Mini SIMRS API Documentation')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.use('/api-docs',
    apiReference({
      theme: 'deepSpace',
      spec: {
        content: document
      }
    })
  )
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
