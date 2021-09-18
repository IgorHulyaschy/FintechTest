import { AppContext } from '../app';
import { Service } from './service';

export class Controller {
  static async createTask(ctx: AppContext) {
    const { task } = ctx.request.body;
    await Service.createTask(task);
    ctx.status = 201;
  }

  static async getAlltasks(ctx: AppContext) {
    ctx.status = 200;
    ctx.body = await Service.getAllTasks();
  }

  static async getById(ctx: AppContext) {
    try {
      const { id } = ctx.request.params;
      ctx.body = await Service.getById(id);
      ctx.status = 200;
    } catch (err: any) {
      ctx.status = 404;
      ctx.body = {
        error: err.message
      }
    }
  }

  static async updateTask(ctx: AppContext) {
    try {
      const { id, task } = ctx.request.body;
      ctx.status = 200;
      ctx.body = ( await Service.updateTask(id, task) );
    } catch (err: any) {
      ctx.status = 404;
      ctx.body = {
        error: err.message
      }
    }
  }
}
