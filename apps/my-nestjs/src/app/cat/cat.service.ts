import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  create(): string {
    return 'This action adds a new cat';
  }
}
