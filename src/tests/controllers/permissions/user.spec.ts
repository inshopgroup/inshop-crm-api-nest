import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../../../controllers/permissions/user';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: User;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [User],
      providers: [AppService],
    }).compile();

    appController = app.get<User>(User);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
