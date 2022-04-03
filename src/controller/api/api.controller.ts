import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../common/error/exception';
import { ErrorCode } from '../../common/error/code';


const apiController = (req: Request, res: Response, next: NextFunction) => {
    console.log('REST CONTROLLER');
    
    throw new HttpException(ErrorCode.UnknownError);


    res.status(200).send({ method: req.method, message: 'API Working' });
};

export {
    apiController
}