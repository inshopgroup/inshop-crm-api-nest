import { Role } from '../entities/role.entity';

export class CreateModuleDto {
  name: string;
  roles: Role[];
}
