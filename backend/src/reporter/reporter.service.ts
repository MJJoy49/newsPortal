import { CreateMediaDTO } from './dto/Create.media.dto';
import { UpdateProfileDTO } from './dto/update.profile.dto';
import { SubmitOpinionDTO } from './dto/submit.opinion.dto';
import { Injectable } from '@nestjs/common';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';
import { UpdateTagsDTO } from './dto/update.tages.dto';

@Injectable()
export class ReporterService {
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
    if (id == 'E-01') {
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
        error: 'DTO is not comming here!!!',
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

  SubmitOpinion(submitOpinion: SubmitOpinionDTO): object {
    console.log(submitOpinion.title);
    return {
      success: {
        Status: 'pending',
      },
    };
  }

  updateTagesDTO(id: string, updateTagesDTO: UpdateTagsDTO): object {
    console.log(updateTagesDTO.tagIds.at(1));
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
      message: 'profile is successfully update',
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
    return { data: { facebook: 45, whatsapp: 89, total: 151 } };
  }

  createMedia(createMediaDto: CreateMediaDTO) {
    return { data: { url: createMediaDto.url } };
  }
}
