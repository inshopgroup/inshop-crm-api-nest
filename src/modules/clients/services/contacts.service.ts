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

  create(clientId: number, createContactDto: CreateContactDto) {
    const newContact = {
      ...createContactDto,
      client: clientId,
    } as unknown as Contact;

    const contact = this.contactRepository.create(newContact);

    return this.contactRepository.save(contact);
  }

  findAll(clientId: number) {
    return this.contactRepository.findBy({ client: { id: clientId } });
  }

  findOne(clientId: number, id: number): Promise<Contact | null> {
    return this.contactRepository.findOne({
      where: { id, client: { id: clientId } },
      relations: ['client'],
    });
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
