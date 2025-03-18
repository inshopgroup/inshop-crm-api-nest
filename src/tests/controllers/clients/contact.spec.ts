import { Test, TestingModule } from '@nestjs/testing';
import { Contact } from '../../../controllers/clients/contact';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: Contact;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Contact],
      providers: [AppService],
    }).compile();

    appController = app.get<Contact>(Contact);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
