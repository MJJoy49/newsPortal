/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator"
import { UserRole } from "../enums/user-role.enum";

export class CreateUserDto{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserRole)
    role: UserRole;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    designation?: string;
}