import Koa, { Context } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import { createConnection } from 'typeorm';

import toDoRouter from './todo/router';
import config from '../ormconfig';
import errorCatcher from './middlewares/errorCatcher';

export interface AppContext extends Context {}

const app = new Koa();
try{
  createConnection(config);
  console.log('Connection to db is succsessfull')
} catch (err) {
  console.log(err);
}
app.use(errorCatcher);
const router = new Router();

app.use(bodyParser());


router.use(toDoRouter.middleware());
app.use(router.middleware());

export default app;