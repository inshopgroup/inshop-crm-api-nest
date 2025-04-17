import { Test, TestingModule } from '@nestjs/testing';
import { ContactTypesService } from '../../services/contact-types.service';

describe('ContactTypesService', () => {
  let service: ContactTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactTypesService],
    }).compile();

    service = module.get<ContactTypesService>(ContactTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
