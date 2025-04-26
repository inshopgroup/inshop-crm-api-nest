import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/admin/clients.controller';
import { ContactsController } from './controllers/admin/contacts.controller';
import { ContactsService } from './services/contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Contact])],
  controllers: [ClientsController, ContactsController],
  providers: [ClientsService, ContactsService],
})
export class ClientsModule {}
