import { Test, TestingModule } from '@nestjs/testing';
import { Index } from '../../controllers';
import { AppService } from '../../services/app.service';

describe('Index', () => {
  let appController: Index;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Index],
      providers: [AppService],
    }).compile();

    appController = app.get<Index>(Index);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
