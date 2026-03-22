/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class UploadEpaperDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  publishDate?: string;
  
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  fileUrl?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  filename?: string;
}
