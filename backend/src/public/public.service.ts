import { Injectable } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { CommentDTO } from './dto/comment.dto';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class PublicService {

  
  register(data: RegisterDTO): object {
    return {
      success: true,
      message: 'User registered successfully',
    };
  }

  
  login(data: LoginDTO): object {
    return {
      success: true,
      token: 'demo-jwt-token',
    };
  }

  
  getAllNews(page: number): object {
    return {
      data: {
        page: page,
        news: 'All approved news list',
      },
    };
  }

  
  getNewsByID(id: string): object {
    return {
      data: {
        id: id,
        title: 'This is a single news',
      },
    };
  }

  
  getNewsByCategory(id: string): object {
    return {
      data: {
        categoryId: id,
        news: 'Category wise news list',
      },
    };
  }

  
  searchNews(query: SearchDTO): object {
    return {
      data: {
        keyword: query.keyword,
        result: 'Search result list',
      },
    };
  }

  
  getTrendingNews(): object {
    return {
      data: {
        news: 'Top 5 trending news',
      },
    };
  }

  
  getArchive(month: string, year: string): object {
    return {
      data: {
        month: month,
        year: year,
        news: 'Archive news list',
      },
    };
  }

  
  getRelatedNews(id: string): object {
    return {
      data: {
        relatedTo: id,
        news: 'Related news list',
      },
    };
  }

  
  addComment(data: CommentDTO): object {
    return {
      success: true,
      message: 'Comment added successfully',
    };
  }

  getComments(newsId: string): object {
    return {
      data: {
        newsId: newsId,
        comments: 'All comments of this news',
      },
    };
  }

  
  deleteComment(id: string): object {
    if (id === 'C-01') {
      return {
        success: `Comment ${id} deleted`,
      };
    }
    return {
      error: 'Comment ID not found',
    };
  }

  
  addBookmark(newsId: string): object {
    return {
      success: true,
      message: `News ${newsId} bookmarked`,
    };
  }

  
  getMyBookmarks(): object {
    return {
      data: {
        bookmarks: 'My bookmarked news list',
      },
    };
  }

  
  removeBookmark(newsId: string): object {
    return {
      success: true,
      message: `Bookmark removed for ${newsId}`,
    };
  }


  getEpaper(): object {
    return {
      data: {
        epaper: 'Today epaper PDF link',
      },
    };
  }


  getLiveTV(): object {
    return {
      data: {
        url: 'https://livetv-link.com',
      },
    };
  }

  
  shareNews(newsId: string): object {
    return {
      success: true,
      message: `News ${newsId} shared successfully`,
    };
  }
}