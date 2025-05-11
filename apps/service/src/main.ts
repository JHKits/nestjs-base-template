import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { withSwaggerConfig } from '@tools/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  withSwaggerConfig(app);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
