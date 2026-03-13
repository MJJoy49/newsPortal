import { IsBoolean, IsString, MinLength } from 'class-validator';

export class UpdateOwnNewsDTO {
  @IsString({ message: 'title should be string!' })
  @MinLength(5, { message: ' Title must be greater then 5 character' })
  title: string;
  @IsString({ message: 'Content must be in string format' })
  @MinLength(10, { message: 'Content must be greater then 10 character' })
  content: string;
  @IsString({ message: 'Category must be in string format' })
  @MinLength(3, { message: 'Category must be greater then 3 character' })
  categoryId: string;
  @IsBoolean({ message: 'isPublish must be in boolean type.' })
  isPublish: boolean;
}
