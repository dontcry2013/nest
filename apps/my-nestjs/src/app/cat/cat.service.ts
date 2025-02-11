import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatService {
  create(cat: Cat): string {
    console.log(cat);
    return 'This action adds a new cat';
  }
}
