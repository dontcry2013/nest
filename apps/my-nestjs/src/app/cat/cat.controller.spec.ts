import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/cat.dto';
import { PubSubBodyTransformPipe } from './pipe/pubsub-decode.pipe';
import { CloudEventTransformPipe } from './pipe/cloud-event.pipe';
import { EventValidationPipeFactory } from './pipe/event-validation-factory';
import { SiameseDto } from './dto/siamese.dto';
import { RagDollDto } from './dto/rag-doll.dto';
import { ValidationPipe } from '@nestjs/common';

describe('CatController', () => {
  let catController: CatController;
  let catService: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [
        {
          provide: CatService,
          useValue: {
            create: jest.fn().mockImplementation((dto) => ({
              id: '123',
              ...dto,
            })),
          },
        },
      ],
    }).compile();

    catController = module.get<CatController>(CatController);
    catService = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(catController).toBeDefined();
  });

  describe('create', () => {
    it('should call catService.create and return created cat', async () => {
      const createCatDto: CreateCatDto = {
        name: 'Whiskers',
        breed: 'Siamese',
        age: 2,
      };

      const result = await catController.create(createCatDto);

      expect(catService.create).toHaveBeenCalledWith(createCatDto);
      expect(result).toEqual({
        id: '123',
        ...createCatDto,
      });
    });
  });

  describe('createFluffyCat', () => {
    it('should call catService.create with the provided DTO', async () => {
      const createCatDto: CreateCatDto = {
        name: 'Fluffy',
        breed: 'Ragdoll',
        age: 3,
      };

      const result = await catController.createFluffyCat(createCatDto);

      expect(catService.create).toHaveBeenCalledWith(createCatDto);
      expect(result).toEqual({
        id: '123',
        ...createCatDto,
      });
    });
  });

  describe('Validation Pipes', () => {
    it('should apply the correct pipes for the create method', () => {
      const metadata = Reflect.getMetadata(
        '__pipes__',
        CatController.prototype.create
      );
      expect(metadata).toEqual([
        PubSubBodyTransformPipe,
        CloudEventTransformPipe,
        expect.any(ValidationPipe),
      ]);
    });

    it('should apply the correct pipes for the createFluffyCat method', () => {
      const metadata = Reflect.getMetadata(
        '__pipes__',
        CatController.prototype.createFluffyCat
      );
      const expectedFactoryPipe = EventValidationPipeFactory({
        siamese: SiameseDto,
        ragdoll: RagDollDto,
      });

      expect(metadata).toEqual([PubSubBodyTransformPipe, expectedFactoryPipe]);
    });
  });
});
