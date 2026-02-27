import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SubmitOpinionDTO {
  @IsNotEmpty()
  @IsString({
    message: 'Title Should be a string value',
  })
  @MinLength(3, {
    message: 'lenght of title must be greater then 3 Character',
  })
  title: string;

  @IsNotEmpty()
  @IsString({
    message: 'Opinion should be a string value',
  })
  @MaxLength(250, {
    message: 'Lenght of Opinion must be under 250 characters',
  })
  type: string;
}
