import { IsString, IsInt, Min, Max } from 'class-validator';
import { Cat } from '../cat.interface';

export class CreateCatDto implements Cat {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(30)
  age: number;

  @IsString()
  breed: string;
}
