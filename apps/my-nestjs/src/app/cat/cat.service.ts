import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CatService {
  constructor(private readonly logger: PinoLogger) {}

  create(cat: Cat): string {
    this.logger.info(cat, 'cat received');
    return 'This action adds a new cat';
  }
}
