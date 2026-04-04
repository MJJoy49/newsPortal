import {
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateMediaType } from '../enums/createMedia.enum';
import { Transform } from 'class-transformer';

export class CreateMediaDTO {
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  title: string;
  @IsEnum(CreateMediaType)
  @Transform(function (param: { value: string }) {
    return param.value.toLocaleLowerCase();
  })
  type: CreateMediaType;
  @IsUrl()
  @IsOptional()
  url?: string;
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  @MaxLength(250, {
    message: 'You have to complete your alter text in 250 charactor',
  })
  @IsOptional()
  alterText?: string;
}
