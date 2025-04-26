import { IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Client } from '../entities/client.entity';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  @IsUnique(Client, ['email'], { message: 'Email must be unique' })
  email: string;

  @IsString()
  password: string;
}
