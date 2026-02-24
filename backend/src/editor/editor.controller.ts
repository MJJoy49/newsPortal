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
} from '@nestjs/common';
import { EditorService } from './editor.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { ApproveNewsDto } from './dto/approve-news.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { UploadEpaperDto } from './dto/upload-epaper.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

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
    @Query('categoryId') categoryId?: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ): object {
    return this.editorService.showNewsList(status, categoryId, page, limit);
  }

  @Get('news/:id')
  showNewsById(@Param('id') id: string): object {
    return this.editorService.showNewsById(id);
  }

  @Put('news/:id')
  updateNews(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): object {
    return this.editorService.updateNews(id, updateNewsDto);
  }

  @Delete('news/:id')
  deleteNewsById(@Param('id') id: string): object {
    return this.editorService.deleteNewsById(id);
  }

  @Patch('news/:id/status')
  approveOrReject(
    @Param('id') id: string,
    @Body() approveNewsDto: ApproveNewsDto,
  ) {
    return this.editorService.approveOrReject(id, approveNewsDto);
  }

  @Post('categories')
  createCategory(@Body() createCategoryDto: CreateCategoryDto): object {
    return this.editorService.createCategory(createCategoryDto);
  }

  @Delete('categories/:id')
  deleteCategoryById(@Param('id') id: string): object {
    return this.editorService.deleteCategoryById(id);
  }

  @Patch('categories/:id')
  updateCategoryById(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): object {
    return this.editorService.updateCategoryById(id, updateCategoryDto);
  }

  @Post('epapers')
  uploadEpaper(@Body() uploadEpaperDto: UploadEpaperDto) {
    console.log(uploadEpaperDto.title);
    return this.editorService.uploadEpaper(uploadEpaperDto);
  }

  @Get('epapers/:id')
  showEpaperById(@Param('id') id: string): object {
    return this.editorService.showEpaperById(id);
  }

  @Delete('epapers/:id')
  deleteEpaperById(@Param('id') id: string): object {
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
  deleteTag(@Param('id') id: string): object {
    return this.editorService.deleteTag(id);
  }

  @Patch('tags/:id')
  updateTag(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagDto,
  ): object {
    return this.editorService.updateTag(id, updateTagDto);
  }
}
