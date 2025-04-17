import { Module } from '@nestjs/common';
import { Index } from '../controllers';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, config],
    }),
  ],
  controllers: [Index],
  providers: [AppService],
})
export class AppModule {}
