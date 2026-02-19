import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ReporterService } from './reporter.service';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';
import { SubmitOpinionDTO } from './dto/submit.opinion.dto';

@Controller('reporter')
export class ReporterController {
  private readonly reporterService: ReporterService;
  constructor(reporterService: ReporterService) {
    this.reporterService = reporterService;
  }

  @Post('news')
  newsSubmit(@Body() contentData: SubmitNewsDTO): object {
    return this.reporterService.submitNews(contentData);
  }

  @Get('news')
  getNews(
    @Query('status') status: string,
    @Query('page') page: number,
  ): object {
    // console.log(status, page);
    return this.reporterService.getNews(status, page);
  }

  @Get('media')
  getMedia(@Query('type') type: string): object {
    // console.log(type);
    return this.reporterService.getMedia(type);
  }

  @Get('news/:id')
  getNewsByID(@Param('id') id: string): object {
    // console.log(id);
    return this.reporterService.getnewsByID(id);
  }

  @Delete('media/:id')
  deleteMediaByID(@Param('id') id: string): object {
    // console.log(id);
    return this.reporterService.deleteMediaByID(id);
  }

  @Put('news/:id')
  editNews(
    @Param('id') id: string,
    @Body() updatenews: UpdateOwnNewsDTO,
  ): object {
    return this.reporterService.editNews(id, updatenews);
  }

  @Get('profile')
  getProfile(): object {
    return this.reporterService.getProfile();
  }
  @Post('opinion')
  submitOpinion(@Body() submitOpinion: SubmitOpinionDTO) {
    return this.reporterService.SubmitOpinion(submitOpinion);
  }
}
