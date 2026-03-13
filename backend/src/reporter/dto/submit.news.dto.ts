import { IsEnum, IsString, MinLength } from 'class-validator';
import { SubmitNewsStatus } from '../enums/submitNews.status.enum';
import { Transform } from 'class-transformer';

export class SubmitNewsDTO {
  id: string;
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  title: string;
  @IsString({ message: 'Content must be in string format' })
  @MinLength(10, { message: 'Content must be greater then 10 character' })
  content: string;
  @IsString({ message: 'Content must be in string format' })
  @IsEnum(SubmitNewsStatus)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  status: SubmitNewsStatus;
}
