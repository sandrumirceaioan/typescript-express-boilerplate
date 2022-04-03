import { NextFunction, Request, Response } from 'express';
import { Exception } from '../../common/error/error';

const apiController = (req: Request, res: Response, next: NextFunction) => {
    console.log('REST CONTROLLER');
    try {
        res.status(200).send({ method: req.method, message: 'API Working' });
    } catch (e) {
        throw new Exception(500, e);
    }
};

export {
    apiController
}