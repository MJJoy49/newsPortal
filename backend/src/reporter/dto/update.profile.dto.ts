import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { PasswordValidator } from '../validate/password.validator';

export class UpdateProfileDTO {
  @IsNotEmpty({ message: 'id is empty!!!' })
  @IsString()
  id: string;

  @IsNotEmpty({ message: 'Name is empty!!!' })
  @IsString({ message: 'Name is not string format' })
  @MinLength(3, { message: 'Name must be greater then 3 charactor' })
  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  name?: string;

  @IsNotEmpty({ message: 'Email is empty!!!' })
  @IsOptional()
  @Matches(/^[a-z0-9]+@etv\.reporter\.news$/, {
    message:
      'Email is not valid. Please maintain this format [alam123@etv.reporter.news]',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  email?: string;

  @IsNotEmpty({ message: 'Phone number is empty!!!' })
  @Matches(/^01[0-9]{9}$/, {
    message: 'Number must be start with 01 and it should be 11 digits.',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  phone?: string;

  @IsString({ message: 'Bio is not string format' })
  @IsNotEmpty({ message: 'Bio is empty!!!' })
  @IsOptional()
  bio?: string;
  @IsNotEmpty({ message: 'Input a valid postal code' })
  @IsOptional()
  @Type(() => Number)
  addressPostCode?: number;
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  addressCity?: string;
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  addressState?: string;
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  addressCountry?: string;

  @Validate(PasswordValidator)
  @IsOptional()
  password?: string;
}
