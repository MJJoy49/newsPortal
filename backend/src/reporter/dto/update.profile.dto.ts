import {
  IsEmail,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
} from 'class-validator';
import type { Address } from '../interfaces/address.interface';
import { Transform } from 'class-transformer';

export class UpdateProfileDTO {
  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email address' })
  @Matches(/^[a-z0-9._-]+@etv\.reporter\.news$/, {
    message:
      'Email is not valid. Please maintain this format [alam123@etv.reporter.news]',
  })
  email: string;
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsNotEmpty()
  phone: number;

  @IsString()
  @IsNotEmpty()
  bio: string;
  @IsNotEmpty()
  address: Address;
}
