/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


import { EmailValidationPipe } from './pipes/email-validation.pipe';
import { PasswordValidationPipe } from './pipes/password-validation.pipe';
import { PhoneValidationPipe } from './pipes/phone-validation.pipe';
import { RoleValidationPipe } from './pipes/role-validation.pipe';
import { GenderValidationPipe } from './pipes/gender-validation.pipe';

@Controller('admin')
export class AdminController {

  constructor(private readonly adminService: AdminService) {}

  //POST /admin/users
  @Post('users')
  @UsePipes(
    EmailValidationPipe,
    PasswordValidationPipe,
    PhoneValidationPipe,
    RoleValidationPipe,
    GenderValidationPipe,    
  )
  public createUser(@Body() dto: CreateUserDto) {
    return this.adminService.createUser(dto);
  }

  //GET /admin/users?role=&status=
  @Get('users')
  public getUsers(
    @Query('role') role?: string,
    @Query('status') status?: string,
  ) {
    return this.adminService.getUsers(role, status);
  }

  //GET /admin/users/:id
  @Get('users/:id')
  public getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(id);
  }

  //PUT /admin/users/:id
  @Put('users/:id')
  public updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.adminService.updateUser(id, dto);
  }

  //DELETE /admin/users/:id
  @Delete('users/:id')
  public deleteUser(@Param('id') id: string) {
    const currentUserId = 'user-001';
    return this.adminService.deleteUser(id, currentUserId);
  }
}