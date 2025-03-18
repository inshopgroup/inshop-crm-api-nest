import { Test, TestingModule } from '@nestjs/testing';
import { GroupRole } from '../../../controllers/permissions/groupRole';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: GroupRole;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GroupRole],
      providers: [AppService],
    }).compile();

    appController = app.get<GroupRole>(GroupRole);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
