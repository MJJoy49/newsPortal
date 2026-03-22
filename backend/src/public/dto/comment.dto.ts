import { IsNotEmpty } from 'class-validator';

export class CommentDTO {

  @IsNotEmpty({ message: 'News ID is required' })
  newsId: string;

  @IsNotEmpty({ message: 'Comment content cannot be empty' })
  content: string;
}