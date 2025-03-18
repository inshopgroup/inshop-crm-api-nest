import { Test, TestingModule } from '@nestjs/testing';
import { Login } from '../../../controllers/auth/login';
import { AppService } from '../../../services/app.service';

describe('Auth', () => {
  let appController: Login;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Login],
      providers: [AppService],
    }).compile();

    appController = app.get<Login>(Login);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
