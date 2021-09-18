import * as Router from 'koa-joi-router';
const joi = Router.Joi;


export class Validator {
  static createTask: Router.Config =  {
    validate: {
      type: "json",
      body: {
        task: joi.string().min(3).max(4000).required(),
      },
    }
  }

  static updateTask: Router.Config = {
    validate: {
      type: "json",
      body: {
        id: joi.number().min(1).required(),
        task: joi.string().min(3).max(4000).required(),
      },
    }
  }
}
