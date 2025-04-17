import { Test, TestingModule } from '@nestjs/testing';
import { ModulesController } from '../../controllers/modules.controller';
import { ModulesService } from '../../services/modules.service';

describe('ModulesController', () => {
  let controller: ModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulesController],
      providers: [ModulesService],
    }).compile();

    controller = module.get<ModulesController>(ModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
