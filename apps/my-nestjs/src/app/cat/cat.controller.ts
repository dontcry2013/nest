import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/cat.dto';
import { PubSubBodyTransformPipe } from './pipe/pubsub-decode.pipe';
import { CloudEventTransformPipe } from './pipe/cloud-event.pipe';
import { EventValidationPipeFactory } from './pipe/event-validation.pipe';
import { SiameseDto } from './dto/siamese.dto';
import { RagDollDto } from './dto/rag-doll.dto';

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
    console.log(createCatDto);
    return this.catService.create();
  }

  @Post('fluffy')
  @UsePipes(
    PubSubBodyTransformPipe,
    EventValidationPipeFactory({
      siamese: SiameseDto,
      ragdoll: RagDollDto,
    })
  )
  async createFluffyCat(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.catService.create();
  }
}
