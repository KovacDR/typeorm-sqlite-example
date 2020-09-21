import { Request, Response, NextFunction } from 'express';

export function NotFoundHanlder(req: Request, res: Response, next: NextFunction) {
    const error = new Error(`Error 404 page ${req.originalUrl} Not found`);
    res.status(404);
    next(error);
}

export function ErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'nel' : error.stack,
    });
}