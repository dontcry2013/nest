import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PubSubBodyTransformPipe implements PipeTransform {
  transform(value: any): any {
    if (!value || !value.message || !value.message.data) {
      throw new BadRequestException('Invalid Pub/Sub message format');
    }

    try {
      // Decode Base64 and parse JSON
      const decoded = Buffer.from(value.message.data, 'base64').toString(
        'utf-8'
      );
      return JSON.parse(decoded); // This is the CloudEvent
    } catch (error) {
      throw new BadRequestException('Invalid Base64 or JSON format');
    }
  }
}
