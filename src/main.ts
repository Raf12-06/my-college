import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Программа для колледжа')
    .setDescription('Ведение документации')
    .setVersion('1.0.0')
    .addTag('example')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalGuards(JwtAuthGuard); // глобальный запрет ко всем роутам приложения
  app.useGlobalPipes(new ValidationPipe()) // глобальный pipe

  await app.listen(PORT, () => {
    console.log(`Started on ${PORT} post...`);
  })
}

start();
