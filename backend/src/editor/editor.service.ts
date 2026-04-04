/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { ApproveNewsDto } from './dto/approve-news.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { UploadEpaperDto } from './dto/upload-epaper.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CreateReporterDto } from './dto/create-reporter.dto';

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
    categoryId?: string,
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
  updateCategoryById(id: string, updateCategoryDto: UpdateCategoryDto): object {
    return {
      message: `This will update category ${id}, name: ${updateCategoryDto.name}`,
    };
  }
  uploadEpaper(uploadEpaperDto: UploadEpaperDto): object {
    return { message: `This will upload Epaper ${uploadEpaperDto.title} ${uploadEpaperDto.filename} ` };
  }
  showEpaperById(id: string): object {
    return { message: `This will show an epaper ${id}` };
  }
  deleteEpaperById(id: string): object {
    return { message: `This will delete an epaper ${id}` };
  }
  createTag(createTagDto: CreateTagDto): object {
    return { message: `This will create a tag ${createTagDto.name}` };
  }
  getAllTags(): object {
    return { message: `This will get all tags` };
  }
  deleteTag(id: string): object {
    return { message: `This will delete tag ${id}` };
  }
  updateTag(id: string, updateTagDto: UpdateTagDto): object {
    return {
      message: `This will update tag ${id}, name: ${updateTagDto.name}`,
    };
  }
  getNewsComments(id: string): object {
    return { message: `This will show all the comment of news ${id}` };
  }
  createReporter(createReporterDto: CreateReporterDto): object {
    return {message: `This will create a reporter ${createReporterDto.name}`}
  }
}
