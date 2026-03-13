import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Put,
  Patch,
  ValidationPipe,
  UseInterceptors,
  ParseIntPipe,
  UploadedFile,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { ReporterService } from './reporter.service';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';
import { SubmitOpinionDTO } from './dto/submit.opinion.dto';
import { UpdateTagesDTO } from './dto/update.tages.dto';
import { UpdateProfileDTO } from './dto/update.profile.dto';
import { CreateMediaDTO } from './dto/Create.media.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError } from 'multer';
import * as fs from 'fs';
import { join } from 'path';

@Controller('reporter')
export class ReporterController {
  private readonly reporterService: ReporterService;
  constructor(reporterService: ReporterService) {
    this.reporterService = reporterService;
  }

  @Post('news') //1
  createNews(
    @Body(new ValidationPipe({ transform: true })) contentData: SubmitNewsDTO,
  ): object {
    return this.reporterService.createNews(contentData);
  }

  @Get('news') //2
  getNews(
    @Query('status') status: string,
    @Query('page', ParseIntPipe) page: number,
  ): object {
    // console.log(status, page);
    return this.reporterService.getNews(status, page);
  }

  @Get('media') //3
  getMedia(@Query('type') type: string): object {
    // console.log(type);
    return this.reporterService.getMedia(type);
  }

  @Get('news/:id') //4
  getNewsByID(@Param('id') id: string): object {
    // console.log(id);
    return this.reporterService.getnewsByID(id);
  }

  @Delete('media/:id') //5
  deleteMediaByID(@Param('id') id: string): object {
    // console.log(id);
    return this.reporterService.deleteMediaByID(id);
  }

  @Put('news/:id') //6
  editNews(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    updatenews: UpdateOwnNewsDTO,
  ): object {
    return this.reporterService.editNews(id, updatenews);
  }

  @Get('profile') //7
  getProfile(): object {
    return this.reporterService.getProfile();
  }
  @Post('opinion') //8
  submitOpinion(
    @Body(new ValidationPipe({ transform: true }))
    submitOpinion: SubmitOpinionDTO,
  ) {
    return this.reporterService.SubmitOpinion(submitOpinion);
  }
  @Patch('news/:id/tags') //9
  updateTages(
    @Param('id') newsId: string,
    @Body(
      new ValidationPipe({
        transform: true,
        forbidNonWhitelisted: true,
        whitelist: true,
      }),
    )
    updateTagesDTO: UpdateTagesDTO,
  ): object {
    return this.reporterService.updateTagesDTO(newsId, updateTagesDTO);
  }
  @Patch('profile')
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (_res, file, cb) => {
        if (file.originalname.endsWith('.pdf')) {
          cb(null, true);
        } else {
          cb(new BadRequestException('Only PDF or DOC files allowed'), false);
        }
      },
      limits: {
        fileSize: 3 * 1024 * 1024, //30000
      },
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     cb(null, Date.now() + '-' + file.originalname);
      //     console.log(file.originalname);
      //   },
      // }),
    }),
  )
  updateProfile(
    @Body(new ValidationPipe({ transform: true }))
    updateProfileDTO: UpdateProfileDTO,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const uploadPath = join(
        process.cwd(),
        'uploads',
        Date.now() + '-' + file.originalname,
      );
      fs.writeFileSync(uploadPath, file.buffer);
    }

    return this.reporterService.updateProfile(updateProfileDTO, file);
  }

  @Get('dashboard') //11
  getDashboard() {
    return this.reporterService.getDashboard();
  }

  @Get('news/:id/share-count') //12
  getShareCount(@Param('id') id: string) {
    return this.reporterService.getShareCount(id);
  }

  @Post('media')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (res, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|pdf|mp4)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'file'), false);
        }
      },
      limits: { fileSize: 50 * 1024 * 1024 },
    }),
  )
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  createMedia(
    @Body() createMediaDTO: CreateMediaDTO,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    if (file) {
      const uploadPath = join(
        process.cwd(),
        'uploads',
        Date.now() +
          '- ' +
          file.originalname.split('.')[1] +
          '-' +
          file.originalname,
      );
      fs.writeFileSync(uploadPath, file.buffer);
      createMediaDTO.url = uploadPath;
    }

    return this.reporterService.createMedia(createMediaDTO);
  }
}
