import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class EventValidationPipe implements PipeTransform {
  constructor(private readonly dtoMap: Record<string, any>) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    if (!value || !value.type || !value.data) {
      throw new BadRequestException('Invalid CloudEvent format');
    }

    const dtoClass = this.dtoMap[value.type];
    if (!dtoClass) {
      throw new BadRequestException(`Unsupported event type: ${value.type}`);
    }

    const dtoInstance = plainToInstance(dtoClass, value.data);
    const errors = validateSync(dtoInstance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return { eventType: value.type, data: dtoInstance };
  }
}
