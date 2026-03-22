import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {

  @IsEmail({}, { message: 'Valid email required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}