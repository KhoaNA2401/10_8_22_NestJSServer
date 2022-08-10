import { Test, TestingModule } from '@nestjs/testing';
import { NoteservicesService } from './noteservices.service';

describe('NoteservicesService', () => {
  let service: NoteservicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteservicesService],
    }).compile();

    service = module.get<NoteservicesService>(NoteservicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
