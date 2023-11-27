import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, TasksModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
