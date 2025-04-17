import { Test, TestingModule } from '@nestjs/testing';
import { ContactTypesController } from './contact-types.controller';
import { ContactTypesService } from './contact-types.service';

describe('ContactTypesController', () => {
  let controller: ContactTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactTypesController],
      providers: [ContactTypesService],
    }).compile();

    controller = module.get<ContactTypesController>(ContactTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
