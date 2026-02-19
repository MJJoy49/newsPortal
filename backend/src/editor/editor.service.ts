import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class EditorService {
  createNewsAndPublish(createNewsDto: CreateNewsDto) {
    return 'This action create and publish a news';
  }
}
