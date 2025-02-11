import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  create(): string {
    return 'This action is from common service';
  }
}
