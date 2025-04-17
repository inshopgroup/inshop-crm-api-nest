import { Module } from '@nestjs/common';
// import { Index } from '../controllers';
// import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
// import { ModulesModule } from './modules.module';
import config from './config/config';
import databaseConfig from './config/database.config';
import { ClientsModule } from './modules/clients/clients.module';
import { PermissionsModule } from './modules/permissions/permissions.module';

@Module({
  imports: [
    ClientsModule,
    PermissionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, config],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
