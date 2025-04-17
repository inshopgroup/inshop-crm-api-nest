import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { AuthController } from './controllers/auth.controller';
import { GroupsController } from './controllers/groups.controller';
import { ModulesController } from './controllers/modules.controller';
import { UsersController } from './controllers/users.controller';
import { AuthService } from './services/auth.service';
import { GroupsService } from './services/groups.service';
import { ModulesService } from './services/modules.service';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';

@Module({
  controllers: [
    AuthController,
    GroupsController,
    ModulesController,
    RolesController,
    UsersController,
  ],
  providers: [
    AuthService,
    GroupsService,
    ModulesService,
    RolesService,
    UsersService,
  ],
})
export class PermissionsModule {}
