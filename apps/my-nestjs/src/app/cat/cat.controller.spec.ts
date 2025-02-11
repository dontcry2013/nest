import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';

//curl -X POST http://localhost:3000/api/cat -H "Content-Type: application/json" --data '{"name":"xyz","breed":"xyz","age":3}'
describe('CatController', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
