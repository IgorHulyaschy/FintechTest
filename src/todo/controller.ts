import { getConnection } from 'typeorm';
import { AppContext } from '../app';
import { Service } from './service';

export class Controller {
  static async createTask(ctx: AppContext) {
    const { task } = ctx.request.body;
    try{
      await Service.createTask(task);
      ctx.status = 201;
      ctx.body = {
        message: 'done'
      }
    } catch(err) {
      console.log(err);
    } 
  }
}
