import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReporterModule } from './reporter/reporter.module';
import { EditorModule } from './editor/editor.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [EditorModule, ReporterModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
