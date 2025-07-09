import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Mini SIMRS')
    .setDescription('The Mini SIMRS API Documentation')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.use('/api-docs',
    apiReference({
      spec: {
        content: document
      }
    })
  )
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
