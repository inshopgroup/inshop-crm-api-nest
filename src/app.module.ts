import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import databaseConfig from './config/database.config';
import { ClientsModule } from './modules/clients/clients.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ClientsModule,
    PermissionsModule,
    RouterModule.register([
      {
        path: 'api',
        module: AppModule,
        children: [
          {
            path: 'clients',
            module: ClientsModule,
          },
          {
            path: 'permissions',
            module: PermissionsModule,
          },
        ],
      },
      // {
      //   path: 'clients',
      //   module: ClientsModule,
      // },
      // {
      //   path: 'permissions',
      //   module: PermissionsModule,
      // },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, config],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
