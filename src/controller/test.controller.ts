import { Request, Response, NextFunction } from 'express';

const testController = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('TEST CONTROLLER');
        res.render('index', { title: 'Netflix Clones', email: '' });
    } catch (error) {
        console.log(error);
        res.status(500).send('TEST ERROR');
    }

};

export {
    testController
}