import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllersModule } from './controllers/api'
import { DatabaseModule } from './database'

@Module({
  imports: [DatabaseModule, ApiControllersModule],
})
export class AppModule {}
