import { Role } from '../entities/role.entity';
import { IsString } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  name: string;

  roles: Role[];
}
