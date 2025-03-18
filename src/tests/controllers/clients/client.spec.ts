import { Test, TestingModule } from '@nestjs/testing';
import { Client } from '../../../controllers/clients/client';
import { AppService } from '../../../services/app.service';

describe('Client', () => {
  let appController: Client;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Client],
      providers: [AppService],
    }).compile();

    appController = app.get<Client>(Client);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
