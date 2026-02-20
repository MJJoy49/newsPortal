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
    @Query('limit ') limit?: number,
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
}
