import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './cat.dto';
import { PubSubBodyTransformPipe } from './pubsub-decode.pipe';
import { CloudEventTransformPipe } from './cloud-event.pipe';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @UsePipes(
    PubSubBodyTransformPipe,
    CloudEventTransformPipe,
    new ValidationPipe()
  )
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(123, createCatDto);
    return this.catService.create();
  }
}
