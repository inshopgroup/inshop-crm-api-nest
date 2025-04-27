import { IsEnum, IsInt, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import { Client } from '../entities/client.entity';
import ContactType from '../types/contacts.type';

export class CreateContactDto {
  @IsInt()
  client: Client;

  @IsString()
  value: string;

  @IsEnum(ContactType)
  @IsUnique(Contact, ['value', 'type'], { message: 'Value must be unique' })
  type: ContactType;
}
