import { Role } from '../entities/role.entity';

export class CreateGroupDto {
  name: string;
  roles: Role[];
}
