
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import {Transform} from 'class-transformer';
import { PasswordValidator } from '../validate/password.validator';
import {Address} from '../dto/interfaces/address.interface';


export class UpdateProfileDTO {
  @IsNotEmpty({ message: 'id is empty!!!' })
  @IsString()
  id: string;

  @IsNotEmpty({ message: 'Name is empty!!!' })
  @IsString({ message: 'Name is not string format' })
  @MinLength(3, { message: 'Name must be greater then 3 charactor' })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  name: string;

  @IsNotEmpty({ message: 'Email is empty!!!' })
  @Matches(/^[a-z0-9]+@etv\.reporter\.news$/, {
    message:
      'Email is not valid. Please maintain this format [alam123@etv.reporter.news]',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  email: string;

  @IsNotEmpty({ message: 'Phone number is empty!!!' })
  @Matches(/^01[0-9]{9}$/, {
    message: 'Number must be start with 01 and it should be 11 digits.',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  phone: string;

  @IsString({ message: 'Bio is not string format' })
  @IsNotEmpty({ message: 'Bio is empty!!!' })
  @IsOptional()
  bio?: string;
  address: Address;

  @Validate(PasswordValidator)
  password: string;
}
