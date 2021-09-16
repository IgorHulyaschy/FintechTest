import { getConnection } from "typeorm";
import { Task } from "../entities/todo.entity";

export class Service {
  static async createTask(task: string) {
    const taskRepository = getConnection().getRepository(Task)
    const time = new Date();
    const data = {
      task, 
      time
    };
    await taskRepository.save(data);
  }
}