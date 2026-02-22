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
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('admin')
export class AdminController {

  constructor(private readonly adminService: AdminService) {}

  // 01: POST /admin/users
  @Post('users')
  public createUser(@Body() dto: CreateUserDto) {
    return this.adminService.createUser(dto);
  }

  // 02: GET /admin/users?role=&status=
  @Get('users')
  public getUsers(
    @Query('role') role?: string,
    @Query('status') status?: string,
  ) {
    return this.adminService.getUsers(role, status);
  }

  // 03: GET /admin/users/:id
  @Get('users/:id')
  public getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(id);
  }

  // 04: PUT /admin/users/:id
  @Put('users/:id')
  public updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.adminService.updateUser(id, dto);
  }

  // 05: DELETE /admin/users/:id
  @Delete('users/:id')
  public deleteUser(@Param('id') id: string) {
    const currentUserId = 'user-001';
    return this.adminService.deleteUser(id, currentUserId);
  }
}