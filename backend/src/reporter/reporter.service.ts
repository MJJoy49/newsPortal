import { SubmitOpinionDTO } from './dto/submit.opinion.dto';
import { Injectable } from '@nestjs/common';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';

@Injectable()
export class ReporterService {
  submitNews(contentData: SubmitNewsDTO): object {
    console.log(contentData.title);
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
        media: 'hello this is media',
      },
    };
  }

  getnewsByID(id: string) {
    // console.log(id);
    return {
      data: {
        news: 'this is a news',
      },
    };
  }

  deleteMediaByID(id: string) {
    let result: object;
    // console.log(id);
    if (id == 'E-01') {
      result = {
        success: 'this data is deleted',
      };
    } else {
      result = {
        error: 'Id is not found',
      };
    }
    return result;
  }
  editNews(id: string, updatenews: UpdateOwnNewsDTO): object {
    if (updatenews.isPublish) {
      return { news: 'news is publish' };
    } else if (
      !(updatenews.categoryId == 'Draft' || updatenews.categoryId == 'pending')
    ) {
      return {
        errorMessage: " Can'\t edit this Artical ",
      };
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

  SubmitOpinion(submitOpinion: SubmitOpinionDTO) {
    console.log(submitOpinion.title);
    return {
      success: {
        Status: 'pending',
      },
    };
  }
}
