import { Module } from '@nestjs/common';
import { ReporterController } from './reporter.controller';
import { ReporterService } from './reporter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entity/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [ReporterController],
  providers: [ReporterService],
})
export class ReporterModule {}
