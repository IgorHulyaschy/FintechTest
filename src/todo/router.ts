import Router from 'koa-joi-router';
import { Controller } from './controller';
import { Validator } from './validator';

const router = Router();

router.post('/api/todo', Validator.createTask, Controller.createTask);
router.get('/api/todo', Controller.getAlltasks);
router.get('/api/todo/:id', Controller.getById);
router.put('/api/todo', Validator.updateTask, Controller.updateTask);

export default router;
