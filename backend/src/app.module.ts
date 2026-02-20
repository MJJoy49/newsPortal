import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReporterModule } from './reporter/reporter.module';
import { EditorModule } from './editor/editor.module';


@Module({
  imports: [EditorModule, ReporterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
