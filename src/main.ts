import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import agent from 'skywalking-backend-js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  agent.start({
    serviceName: 'hello',
    collectorAddress: '121.43.122.206:11800'
  })
  await app.listen(3001);
}
bootstrap();
