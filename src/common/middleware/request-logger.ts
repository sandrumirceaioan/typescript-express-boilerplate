import { Request, Response, NextFunction } from 'express';

const beforeRequestLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

export {
    beforeRequestLogger
};