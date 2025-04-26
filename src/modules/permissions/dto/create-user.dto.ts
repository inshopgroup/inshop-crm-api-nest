import { Group } from '../entities/group.entity';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  groups: Group[];
  isActive: boolean;
}
