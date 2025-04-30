import { IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Client } from '../entities/client.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsUnique(Client, ['email'], { message: 'Email must be unique' })
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;
}
