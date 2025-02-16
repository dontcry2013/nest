import { CatService } from './cat.service';
import { Cat } from './cat.interface';
import { PinoLogger } from 'nestjs-pino';

describe('CatService', () => {
  let catService: CatService;
  let logger: PinoLogger;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
    } as unknown as PinoLogger;
    catService = new CatService(logger);
  });

  test('should create a cat and log the info', () => {
    const cat: Cat = { name: 'Fluffy', age: 5, breed: 'Siamese' };

    const result = catService.create(cat);

    expect(result).toEqual('This action adds a new cat');
    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith(cat, 'cat received');
  });
});
