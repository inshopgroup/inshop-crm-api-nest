import { Module } from '@nestjs/common';
import { Index } from '../controllers';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [Index],
  providers: [AppService],
})
export class AppModule {}
