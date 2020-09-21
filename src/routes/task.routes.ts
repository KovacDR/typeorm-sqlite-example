import { Router } from 'express';
const router: Router = Router();
import * as TaskController from '../controllers/tasks.controller';

router.route('/')
    .get(TaskController.getTaks)
    .post(TaskController.addTask);

router.route('/:id')
    .get(TaskController.getOneTask)
    .delete(TaskController.removeTask)
    .put(TaskController.checkTask);

export default router;