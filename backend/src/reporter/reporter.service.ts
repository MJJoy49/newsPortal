import { Media } from './entity/media.entity';
import { CreateMediaDTO } from './dto/Create.media.dto';
import { UpdateProfileDTO } from './dto/update.profile.dto';
import { SubmitOpinionDTO } from './dto/submit.opinion.dto';
import { Injectable } from '@nestjs/common';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';
import { UpdateTagsDTO } from './dto/update.tages.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReporterService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  createNews(contentData: SubmitNewsDTO): object {
    // console.log(contentData.title);
    return {
      data: {
        status: 'pending',
      },
    };
  }

  getNews(status: string, page: number): object {
    // console.log(status, page);
    return {
      data: {
        news: 'hello prothom alo',
      },
    };
  }
  getMedia(type: string): object {
    // console.log(type);
    return {
      data: {
        media: `hello this is ${type}`,
      },
    };
  }

  getnewsByID(id: string): object {
    // console.log(id);
    return {
      data: {
        news: 'this is a news',
      },
    };
  }

  deleteMediaByID(id: string): object {
    let result: object;
    // console.log(id);
    if (id === 'E-01') {
      result = {
        success: `this data is deleted ${id}`,
      };
    } else {
      result = {
        error: 'Id is not found',
      };
    }
    return result;
  }
  editNews(id: string, updatenews: UpdateOwnNewsDTO): object {
    if (!updatenews) {
      return {
        error: 'Invalid request data: update payload is missing.',
      };
    }

    if (updatenews.isPublish) {
      return { news: 'news is publish' };
    }
    return {
      success: true,
    };
  }

  getProfile(): object {
    return {
      data: {
        name: 'Alam Pranto',
        status: {
          totalNews: 45,
          publishNews: 38,
        },
      },
    };
  }

  submitOpinion(submitOpinion: SubmitOpinionDTO): object {
    console.log(submitOpinion.title);
    return {
      success: {
        Status: 'pending',
      },
    };
  }

  updateTags(id: string, updateTagsDTO: UpdateTagsDTO): object {
    const firstTagId =
      updateTagsDTO?.tagIds && updateTagsDTO.tagIds.length > 0
        ? updateTagsDTO.tagIds[0]
        : undefined;
    console.log(firstTagId);
    return {
      success: true,
      message: 'News tags updated successfully',
    };
  }

  updateProfile(
    updateReporterDTO: UpdateProfileDTO,
    file?: Express.Multer.File,
  ): object {
    // console.log(file?.originalname);
    return {
      success: true,
      message: 'Profile updated successfully',
    };
  }

  getDashboard(): object {
    return {
      data: {
        today: {
          submit: 3,
        },
        thismonth: {
          submit: 45,
        },
      },
    };
  }

  getShareCount(id: string): object {
    const facebook = 45;
    const whatsapp = 89;
    const total = facebook + whatsapp;
    return { data: { facebook, whatsapp, total } };
  }

  public async createMedia(createMediaDto: CreateMediaDTO) {
    let createMedia = await this.mediaRepository.create(createMediaDto);
    createMedia = await this.mediaRepository.save(createMedia);
    return createMedia;
  }
}
