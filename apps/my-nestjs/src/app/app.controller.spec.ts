import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: LoginService,
          useValue: {
            getConfig: jest.fn().mockReturnValue({ apiKey: 'test-key' }), // Mock return value
          },
        },
      ],
    }).compile();
  });

  describe('controller', () => {
    it('should be defined"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController).toBeDefined();
    });
  });
});
