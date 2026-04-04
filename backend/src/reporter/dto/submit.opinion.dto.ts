import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SubmitOpinionDTO {
  @IsNotEmpty({ message: 'Title is empty.' })
  @IsString({
    message: 'Title Should be a string value',
  })
  @MinLength(5, {
    message: 'lenght of title must be greater then 5 Character',
  })
  title: string;

  @IsNotEmpty({ message: 'Opinion is empty.' })
  @IsString({
    message: 'Opinion should be a string value',
  })
  @MaxLength(250, {
    message: 'Lenght of Opinion must be under 250 characters',
  })
  type: string;
}
