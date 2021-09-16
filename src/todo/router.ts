import Router from 'koa-joi-router';
import { Controller } from './controller';

const router = Router();

router.post('/api/todo', Controller.createTask);

export default router;


