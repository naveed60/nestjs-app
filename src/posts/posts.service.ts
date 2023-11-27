// posts.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private readonly posts = []; // Replace with your data store (database, in-memory array, etc.)

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find(post => post.id === id);
  }

  create(post: any) {
    this.posts.push(post);
    return post;
  }

  update(id: string, updatePostDto: any) {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts[index] = { ...this.posts[index], ...updatePostDto };
      return this.posts[index];
    }
    return null;
  }

  remove(id: string) {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      const removed = this.posts.splice(index, 1);
      return removed[0];
    }
    return null;
  }
}
