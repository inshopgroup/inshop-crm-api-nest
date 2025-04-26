import { IsInt, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import { Client } from '../entities/client.entity';

export class CreateContactDto {
  @IsInt()
  client: Client;

  @IsString()
  @IsUnique(Contact, ['value', 'type'], { message: 'Value must be unique' })
  value: string;

  @IsString()
  type: 'email' | 'phone';
}
