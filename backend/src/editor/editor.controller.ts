/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  ParseUUIDPipe,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { EditorService } from './editor.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { ApproveNewsDto } from './dto/approve-news.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { UploadEpaperDto } from './dto/upload-epaper.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CreateReporterDto } from './dto/create-reporter.dto';

@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post('news')
  createNewsAndPublish(@Body() createNewsDto: CreateNewsDto): object {
    return this.editorService.createNewsAndPublish(createNewsDto);
  }

  @Get('news')
  showNewsList(
    @Query('status') status?: string,
    @Query('categoryId', ParseUUIDPipe) categoryId?: string,
    @Query('page', ParseIntPipe) page?: number,
    @Query('limit', ParseIntPipe) limit?: number,
  ): object {
    return this.editorService.showNewsList(status, categoryId, page, limit);
  }

  @Get('news/:id') // UUID: 550e8400-e29b-41d4-a716-446655440000
  showNewsById(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.showNewsById(id);
  }

  @Put('news/:id')
  updateNews(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): object {
    return this.editorService.updateNews(id, updateNewsDto);
  }

  @Delete('news/:id')
  deleteNewsById(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.deleteNewsById(id);
  }

  @Patch('news/:id/status')
  approveOrReject(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() approveNewsDto: ApproveNewsDto,
  ) {
    return this.editorService.approveOrReject(id, approveNewsDto);
  }

  @Post('categories')
  createCategory(@Body() createCategoryDto: CreateCategoryDto): object {
    return this.editorService.createCategory(createCategoryDto);
  }

  @Delete('categories/:id')
  deleteCategoryById(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.deleteCategoryById(id);
  }

  @Patch('categories/:id')
  updateCategoryById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): object {
    return this.editorService.updateCategoryById(id, updateCategoryDto);
  }

  @Post('epapers')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, myFile, cb) => {
        if (myFile.originalname.match(/^.*\.(pdf)$/))
          cb(null, true); // file accepted
        else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'pdf'), false); // file rejected
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, myFile, cb) {
          cb(null, Date.now() + myFile.originalname);
        },
      }),
    }),
  )
  uploadEpaper(
    @Body() uploadEpaperDto: UploadEpaperDto,
    @UploadedFile() file: Express.Multer.File,
  ): object {
    console.log(file.originalname);
    uploadEpaperDto.filename = file.filename;
    return this.editorService.uploadEpaper(uploadEpaperDto);
  }

  @Get('epapers/:id')
  showEpaperById(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.showEpaperById(id);
  }

  @Delete('epapers/:id')
  deleteEpaperById(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.deleteEpaperById(id);
  }

  @Post('tags')
  createTag(@Body() createTagDto: CreateTagDto): object {
    return this.editorService.createTag(createTagDto);
  }

  @Get('tags')
  getAllTags(): object {
    return this.editorService.getAllTags();
  }

  @Delete('tags/:id')
  deleteTag(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.deleteTag(id);
  }

  @Patch('tags/:id')
  updateTag(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTagDto: UpdateTagDto,
  ): object {
    return this.editorService.updateTag(id, updateTagDto);
  }
  @Get('news/:id/comments')
  getNewsComments(@Param('id', ParseUUIDPipe) id: string): object {
    return this.editorService.getNewsComments(id);
  }
  
  @Post('reporters')
  createReporter(@Body() createReporterDto: CreateReporterDto): object {
  return this.editorService.createReporter(createReporterDto);
}
}
