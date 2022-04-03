import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from './code';
import { HttpException } from './exception';
import { ErrorModel } from './model';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.log('Error handling middleware called.');
  // console.log('Path:', req.path);
  // console.error('Error occured:', err);
  if (err instanceof HttpException) {
    res.status(err.status).send(err);
  } else {
    // For unhandled errors.
    res.status(500).send({ code: ErrorCode.UnknownError, status: 500 } as ErrorModel);
  }
}