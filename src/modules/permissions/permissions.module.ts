import { Module } from '@nestjs/common';
import { RolesController } from './controllers/admin/roles.controller';
import { AuthController } from './controllers/admin/auth.controller';
import { GroupsController } from './controllers/admin/groups.controller';
import { ModulesController } from './controllers/admin/modules.controller';
import { UsersController } from './controllers/admin/users.controller';
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
