import { IsEnum, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import ContactType from '../types/contacts.type';

export class CreateContactDto {
  @IsString()
  value: string;

  @IsEnum(ContactType)
  @IsUnique(Contact, ['value', 'type'], { message: 'Value must be unique' })
  type: ContactType;
}
