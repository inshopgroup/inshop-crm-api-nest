import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { ContactsService } from '../../services/contacts.service';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';

@Controller('admin/clients/:clientId/contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(
    @Param('clientId') clientId: string,
    @Body(ValidationPipe) createContactDto: CreateContactDto,
  ) {
    return this.contactsService.create(+clientId, createContactDto);
  }

  @Get()
  findAll(@Param('clientId') clientId: string) {
    return this.contactsService.findAll(+clientId);
  }

  @Get(':id')
  async findOne(@Param('clientId') clientId: string, @Param('id') id: string) {
    const contact = await this.contactsService.findOne(+clientId, +id);

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    return contact;
  }

  @Patch(':id')
  async update(
    @Param('clientId') clientId: string,
    @Param('id') id: string,
    @Body(IdPipe, ValidationPipe) updateContactDto: UpdateContactDto,
  ) {
    const contact = await this.contactsService.findOne(+clientId, +id);

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    await this.contactsService.update(+id, updateContactDto);

    return this.contactsService.findOne(+clientId, +id);
  }

  @Delete(':id')
  async remove(@Param('clientId') clientId: string, @Param('id') id: string) {
    const contact = await this.contactsService.findOne(+clientId, +id);

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    return this.contactsService.remove(+id);
  }
}
