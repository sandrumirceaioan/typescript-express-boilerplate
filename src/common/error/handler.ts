import { Request, Response, NextFunction } from 'express';
import { Exception } from './error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Exception) {
    res.status(err.status).json({ code: err.status, message: err.message });
  } else {
    // For unhandled errors.
    res.status(500).json({ code: 500, message: 'Unhandled error' });
  }
}