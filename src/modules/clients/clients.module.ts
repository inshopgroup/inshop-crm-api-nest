import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/admin/clients.controller';
import { ContactTypesController } from './controllers/admin/contact-types.controller';
import { ContactsController } from './controllers/admin/contacts.controller';
import { ContactTypesService } from './services/contact-types.service';
import { ContactsService } from './services/contacts.service';

@Module({
  controllers: [
    ClientsController,
    ContactTypesController,
    ContactsController,
  ],
  providers: [
    ClientsService,
    ContactTypesService,
    ContactsService,
  ],
})
export class ClientsModule {}
