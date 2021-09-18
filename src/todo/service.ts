import { getConnection, Repository } from "typeorm";
import { Task } from "../entities/todo.entity";
import { NotFoundError } from "../exceptions/notfound";
import { UpdateResult } from "typeorm";

export class Service {
  static async createTask(task: string): Promise<void> {
    const taskRepository = getConnection().getRepository(Task);
    const time = new Date();
    const data = {
      task, 
      time
    };
    await taskRepository.save(data);
  }
  static async getAllTasks(): Promise<Task[]> {
    const taskRepository = getConnection().getRepository(Task);
    const tasks = await taskRepository.find({
      order: {
        time: 'ASC',
      }
    })
    return tasks;
  }

  static async getById(id: string): Promise<Task> {
    const taskRepository = getConnection().getRepository(Task);
    const task = await taskRepository.findOne({
      where: {
        id: id,
      }
    })
    if(task) {
      return task;
    } else {
      throw new NotFoundError;
    }
  }

  static async updateTask(id: string, newtask: string): Promise<UpdateResult> {
    const taskRepository = getConnection().getRepository(Task);
    const task = await taskRepository.findOne({
      where: {id: id},
    })
    if(task) {
      const res = await taskRepository
        .createQueryBuilder()
        .update(Task)
        .set({task: newtask})
        .where('id = :id', {id: id})
        .returning('*')
        .execute();
      return res;
    } else {
      throw new NotFoundError;
    }
  }
}