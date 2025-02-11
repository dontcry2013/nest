import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './cat.dto';

//curl -X POST http://localhost:3000/api/cat -H "Content-Type: application/json" --data '{"name":"xyz","breed":"xyz","age":3}'
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(123, createCatDto);
    return this.catService.create();
  }
}
