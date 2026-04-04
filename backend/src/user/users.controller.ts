import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './DTO/create.user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ValidatedFile } from './Validation/file.validation';
import { join } from 'path';
import * as fs from 'fs';

@Controller('user')
export class UserController {
  private readonly userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  @Get('all')
  getAllUser() {
    return 'all the user are getting';
  }

  @Post('createuser')
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: ValidatedFile,
      limits: { fileSize: 50 * 1024 * 1024 },
    }),
  )
  createUser(
    @Body() userDTO: UserDto,
    @UploadedFile() file: Express.Multer.File,
  ): object {
    {
      if (file) {
        const uploadPath = join(
          process.cwd(),
          'uploads',
          Date.now() + '-' + file.originalname,
        );
        fs.writeFileSync(uploadPath, file.buffer);
        userDTO.photo = uploadPath;
      }
      return this.userService.createUser(userDTO);
    }
  }
}
