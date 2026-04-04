import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';

import { PublicService } from './public.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { CommentDTO } from './dto/comment.dto';
import { SearchDTO } from './dto/search.dto';

@Controller('public')
export class PublicController {

  constructor(private readonly service: PublicService) {}

  
  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: RegisterDTO) {
    return this.service.register(data);
  }

  
  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: LoginDTO) {
    return this.service.login(data);
  }

  
  @Get('news')
  getAllNews(@Query('page') page: number) {
    return this.service.getAllNews(page);
  }

  
  @Get('news/:id')
  getNewsByID(@Param('id') id: string) {
    return this.service.getNewsByID(id);
  }

  
  @Get('category/:id')
  getNewsByCategory(@Param('id') id: string) {
    return this.service.getNewsByCategory(id);
  }

  
  @Get('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  search(@Query() query: SearchDTO) {
    return this.service.searchNews(query);
  }

  
  @Get('trending')
  getTrendingNews() {
    return this.service.getTrendingNews();
  }

  
  @Get('archive')
  getArchive(@Query('month') month: string, @Query('year') year: string) {
    return this.service.getArchive(month, year);
  }

  
  @Get('related/:id')
  getRelatedNews(@Param('id') id: string) {
    return this.service.getRelatedNews(id);
  }

  
  @Post('comment')
  @UsePipes(new ValidationPipe())
  addComment(@Body() data: CommentDTO) {
    return this.service.addComment(data);
  }

  
  @Get('comment/:newsId')
  getComments(@Param('newsId') newsId: string) {
    return this.service.getComments(newsId);
  }

  
  @Delete('comment/:id')
  deleteComment(@Param('id') id: string) {
    return this.service.deleteComment(id);
  }

  
  @Post('bookmark/:newsId')
  addBookmark(@Param('newsId') newsId: string) {
    return this.service.addBookmark(newsId);
  }

  
  @Get('bookmark')
  getMyBookmarks() {
    return this.service.getMyBookmarks();
  }


  @Delete('bookmark/:newsId')
  removeBookmark(@Param('newsId') newsId: string) {
    return this.service.removeBookmark(newsId);
  }

  
  @Get('epaper')
  getEpaper() {
    return this.service.getEpaper();
  }

  
  @Get('livetv')
  getLiveTV() {
    return this.service.getLiveTV();
  }

  
  @Post('share/:newsId')
  shareNews(@Param('newsId') newsId: string) {
    return this.service.shareNews(newsId);
  }
}