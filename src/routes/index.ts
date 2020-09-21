import { Router } from 'express';
const router: Router = Router();
import taskRoutes from './task.routes';

router.use('/tasks', taskRoutes);

export default router;