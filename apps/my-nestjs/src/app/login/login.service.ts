import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { databaseConfig } from './login-config';

@Injectable()
export class LoginService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private readonly config: ConfigType<typeof databaseConfig>
  ) {}

  getConfig() {
    const dbUrl = this.configService.get<string>('DATABASE_URL');
    const apiKey = this.configService.get<string>('API_KEY');
    const username = this.config.username;
    const password = this.config.password;
    return { dbUrl, apiKey, username, password };
  }
}
