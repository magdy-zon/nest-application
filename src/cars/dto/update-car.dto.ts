import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString({message: 'Must be a string'})
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}