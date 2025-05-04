import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';

export class CreateGroupDto {
  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty()
  roles: Role[];
}
