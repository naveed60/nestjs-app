// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, completed: boolean): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = completed;
    }
    return task;
  }

  deleteTask(id: string): Task {
    const index = this.tasks.findIndex(task => task.id === id);
    const deletedTask = this.tasks[index];
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    return deletedTask;
  }
}
