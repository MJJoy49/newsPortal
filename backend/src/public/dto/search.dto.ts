import { IsNotEmpty } from 'class-validator';

export class SearchDTO {

  @IsNotEmpty({ message: 'Keyword is required' })
  keyword: string;
}