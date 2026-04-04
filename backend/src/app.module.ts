import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { EditorModule } from './editor/editor.module';
import { PublicModule } from './public/public.module';
import { ReporterModule } from './reporter/reporter.module';
import { Media } from './reporter/entity/media.entity';
import { User } from './user/entity/user.entity';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    EditorModule,
    ReporterModule,
    AdminModule,
    PublicModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [Media, User],
        synchronize: true,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1111',
        database: 'newsPortal',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
