import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReporterModule } from './reporter/reporter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './reporter/entity/media.entity';
import { UsersModule } from './user/users.module';
import { User } from './user/entity/user.entity';


@Module({
  imports: [
    ReporterModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [Media,User],
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
