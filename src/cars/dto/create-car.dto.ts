import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  @IsString({message: 'Must be a string'})
  readonly brand: string;

  @IsString()
  @MinLength(10)
  readonly model: string;
}