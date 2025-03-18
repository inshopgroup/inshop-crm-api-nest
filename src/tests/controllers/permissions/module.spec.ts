import { Test, TestingModule } from '@nestjs/testing';
import { Module } from '../../../controllers/permissions/module';
import { AppService } from '../../../services/app.service';

describe('AppController', () => {
  let appController: Module;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Module],
      providers: [AppService],
    }).compile();

    appController = app.get<Module>(Module);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.login()).toBe('Hello World!');
    });
  });
});
