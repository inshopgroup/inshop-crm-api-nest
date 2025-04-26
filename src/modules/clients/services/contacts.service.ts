import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto) {
    const contact = this.contactRepository.create(createContactDto);

    return this.contactRepository.save(contact);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number): Promise<Contact | null> {
    return this.contactRepository.findOneBy({ id });
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
