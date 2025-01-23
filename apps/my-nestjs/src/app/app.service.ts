import { Injectable } from '@nestjs/common';
import { LoginService } from './login/login.service';

@Injectable()
export class AppService {
  constructor(private readonly loginService: LoginService) {}

  getData(): { message: string } {
    const loginData = this.loginService.getConfig();
    console.log(loginData);
    return { message: 'Hello API' };
  }
}
