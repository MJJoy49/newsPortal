import {
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';
import { CreateMediaType } from '../enums/createMedia.enum';
import { Type, Transform } from 'class-transformer';

export class CreateMediaDTO {
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  title: string;
  @IsEnum(CreateMediaType)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  type: CreateMediaType;
  @IsUrl()
  @IsOptional()
  url?: string;
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  alterText: string;

}
