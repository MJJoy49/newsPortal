import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { ReporterService } from './reporter.service';
import { SubmitNewsDTO } from './dto/submit.news.dto';
import { UpdateOwnNewsDTO } from './dto/updateOwnNews.dto';
import { SubmitOpinionDTO } from './dto/submit.opinion.dto';
import { UpdateTagesDTO } from './dto/update.tages.dto';
import { UpdateProfileDTO } from './dto/update.profile.dto';

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
  @Patch('news/:id/tags')
  updateTages(
    @Param('id') newsId: string,
    @Body() updateTagesDTO: UpdateTagesDTO,
  ): object {
    return this.reporterService.updateTagesDTO(newsId, updateTagesDTO);
  }
  @Patch('profile')
  updateProfile(@Body() updateProfileDTO: UpdateProfileDTO) {
    return this.reporterService.updateProfile(updateProfileDTO);
  
  
  }

  @Get('dashboard')
  getDashboard()
  {
    return this.reporterService.getDashboard();
  }

  @Get('news/:id/share-count')
  getShareCount(@Param('id') id: string)
  {
    return this.reporterService.getShareCount(id);
  }

}
