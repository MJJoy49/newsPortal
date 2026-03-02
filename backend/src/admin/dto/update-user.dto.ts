/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";
import { UserRole } from "../enums/user-role.enum";

export class UpdateUserDto {
  
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()          
  email?: string;

  @IsOptional()
  @IsString()          
  password?: string;

  @IsOptional()
  @IsString()          
  role?: UserRole;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  designation?: string;
}