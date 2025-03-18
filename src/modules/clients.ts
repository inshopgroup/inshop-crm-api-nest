import { Module } from '@nestjs/common';
import { Index } from '../controllers';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [Index],
  providers: [AppService],
})
export class AppModule {}
