import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Task, Task as TaskEntity } from '../models/Task.entity';


async function getTaks(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const RTask = getRepository(TaskEntity);

        const tasks = await RTask.find();
        return res.json({tasks});

    } catch (err) {
        next(err);
    }
}

async function addTask(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const RTask = getRepository(TaskEntity);

        let task = RTask.create(req.body);
        task = await RTask.save(task);
        return res.json({
            message: 'Task created',
            data: task
        });

    } catch (err) {
        next(err);
    }
}

async function getOneTask(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const RTask = getRepository(TaskEntity);
        const { id } = req.params;

        const task = await RTask.findOne({id});
        if(!task) return res.json({message: 'There is no task with that id'});

        return res.json({task});
    } catch (err) {
        next(err);
    }
}

async function removeTask(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const RTask = getRepository(TaskEntity);
        const { id } = req.params;

        await RTask.delete({id});
        return res.json({message: 'task deleted'});
    } catch (err) {
        next(err);
    }
}

async function checkTask(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const RTask = getRepository(TaskEntity);
        const { id } = req.params;

        const task = await RTask.findOne({id});
        if(!task) return res.json({message: 'There is no task with that id'});

        task.done = !task.done;
        await RTask.save(task);
        
        return res.json({message: 'task updated'});
    } catch (err) {
        next(err);
    }
}

export {
    getTaks,
    addTask,
    getOneTask,
    removeTask,
    checkTask
}