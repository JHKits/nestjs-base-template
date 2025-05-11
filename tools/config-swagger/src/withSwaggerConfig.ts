import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export type SwaggerConfig = {
  title: string;
  description: string;
  version: string;
};

export type NullableSwaggerConfig = {
  [Key in keyof SwaggerConfig]: SwaggerConfig[Key] | undefined;
};

const defaultSwaggerConfig: SwaggerConfig = {
  title: 'Swagger',
  description: 'Swagger API documentation',
  version: '1.0',
};

export function withSwaggerConfig(
  app: INestApplication,
  config: NullableSwaggerConfig | undefined = undefined,
  configureBuilder: (builder: DocumentBuilder) => DocumentBuilder = builder => builder,
): void {
  const swaggerConfig = { ...defaultSwaggerConfig, ...(config ?? {}) };
  console.log(swaggerConfig)
  const baseBuilder = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version);
  const builder = configureBuilder(baseBuilder);
  const options = builder.build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
