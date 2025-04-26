import { Client } from '../entities/client.entity';

export class CreateContactDto {
  client: Client;
  value: string;
  type: 'email' | 'phone';
}
