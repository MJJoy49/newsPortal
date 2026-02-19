import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorService } from './editor.service';
import { CreateNewsDto } from './dto/create-news.dto';

@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post('news')
  createNewsAndPublish(@Body() createNewsDto: CreateNewsDto) {
    return this.editorService.createNewsAndPublish(createNewsDto);
  }

}
