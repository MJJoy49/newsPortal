import { Status } from '../enum/status.enum';
import { Role } from '../enum/role.enum';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class UserDto {
  @IsString({
    message: 'name',
  })
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'email' })
  email: string;

  @IsString({ message: 'password' })
  @IsNotEmpty()
  password: string; // You should hash this before saving to DB

  @IsEnum(Role)
  role: Role;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  designation?: string;

  @IsOptional()
  @IsString()
  facebook?: string;

  @IsOptional()
  @IsString()
  twitter?: string;

  @IsOptional()
  @IsString()
  linkedin?: string;

  @IsOptional()
  @IsString()
  instagram?: string;
}
