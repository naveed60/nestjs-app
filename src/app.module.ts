import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, TasksModule, PostsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
