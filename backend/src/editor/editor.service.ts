import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { ApproveNewsDto } from './dto/approve-news.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { UploadEpaperDto } from './dto/upload-epaper.dto';

@Injectable()
export class EditorService {
  createNewsAndPublish(createNewsDto: CreateNewsDto): object {
    return {
      message: 'This action will create a news',
      title: createNewsDto.title,
      breaking: createNewsDto.isBreaking,
    };
  }
  showNewsList(
    status?: string,
    categoryId?: number,
    page?: number,
    limit?: number,
  ): object {
    return {
      message: 'This action will show news list',
      status: status,
      categoryId: categoryId,
      page: page,
      limit: limit,
    };
  }
  showNewsById(id: string): object {
    return { message: `This will show news ${id}` };
  }
  updateNews(id: string, updateNewsDto: UpdateNewsDto): object {
    return {
      message: `this action will update news ${id}, ${updateNewsDto.title}`,
    };
  }
  deleteNewsById(id: string): object {
    return { message: `This action will delete news ${id}` };
  }
  approveOrReject(id: string, approveNewsDto: ApproveNewsDto): object {
    return { message: `This action will ${approveNewsDto.status} news ${id} ` };
  }
  createCategory(createCategoryDto: CreateCategoryDto): object {
    return { message: `This will create a category ${createCategoryDto.name}` };
  }
  deleteCategoryById(id: string): object {
    return { message: `This will delete category ${id}` };
  }
  uploadEpaper(uploadEpaperDto: UploadEpaperDto): object {
    return { message: `This will upload Epaper ${uploadEpaperDto.title}` };
  }
  showEpaperById(id: string): object {
    return {message: `This will show an epaper ${id}`}
  }
  deleteEpaperById(id: string): object {
    return { message: `This will delete an epaper ${id}` }
  }
}
