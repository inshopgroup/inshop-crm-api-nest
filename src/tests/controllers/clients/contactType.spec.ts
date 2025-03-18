import { Test, TestingModule } from '@nestjs/testing';
import { ContactType } from '../../../controllers/clients/contactType';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: ContactType;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContactType],
      providers: [AppService],
    }).compile();

    appController = app.get<ContactType>(ContactType);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
