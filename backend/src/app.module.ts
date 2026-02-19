import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReporterModule } from './reporter/reporter.module';

@Module({
  imports: [ReporterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
