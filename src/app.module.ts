import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { BookModule } from './book/book.module';
@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".local.env"]
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get('MONGO_URI'),
      inject: [ConfigService]
    }),
  })
    
    ,UsersModule, TasksModule, PostsModule, AdminModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
