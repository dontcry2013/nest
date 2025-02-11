import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';

describe('AppService', () => {
  let appService: AppService;
  let loginService: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    appService = module.get<AppService>(AppService);
    loginService = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should call loginService.getConfig() and return message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = appService.getData();

    expect(loginService.getConfig).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith({ apiKey: 'test-key' });
    expect(result).toEqual({ message: 'Hello API' });

    consoleSpy.mockRestore();
  });
});
