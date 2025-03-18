import { Test, TestingModule } from '@nestjs/testing';
import { UserGroup } from '../../../controllers/permissions/userGroup';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: UserGroup;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserGroup],
      providers: [AppService],
    }).compile();

    appController = app.get<UserGroup>(UserGroup);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
