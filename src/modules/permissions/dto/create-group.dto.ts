import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';
import { Exists } from '../../core/validators/exists.decorator';

export class CreateGroupDto {
  @IsString()
  @ApiProperty()
  name: string;

  @Exists(Role, { message: 'Role not exists' })
  @ApiProperty()
  roles: Role[];
}
