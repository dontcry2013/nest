import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './login-config';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
