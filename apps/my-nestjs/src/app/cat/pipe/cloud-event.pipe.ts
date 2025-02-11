import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CloudEventTransformPipe implements PipeTransform {
  transform(value: any): any {
    if (!value || !value.id || !value.type || !value.data) {
      throw new BadRequestException('Invalid CloudEvent format');
    }

    return value.data; // Extract actual data payload
  }
}
