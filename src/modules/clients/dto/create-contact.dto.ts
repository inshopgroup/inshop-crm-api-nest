export class CreateContactDto {
  clientId: number;
  value: string;
  type: 'email' | 'phone';
}
