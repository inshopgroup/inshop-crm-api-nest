import { Role } from '../entities/role.entity';
import { IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;

  roles: Role[];
}
