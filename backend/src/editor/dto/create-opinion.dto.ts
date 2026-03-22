import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOpinionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  authorName: string;
}
