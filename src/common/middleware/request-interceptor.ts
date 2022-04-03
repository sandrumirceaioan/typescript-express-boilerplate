import { Request, Response, NextFunction } from 'express';

const afterRequestInterceptor = (req: Request, res: Response, next: NextFunction) => {
    let oldSend = res.send;
    res.send = function (data: any): any {
        console.log('RESPONSE: ', data);

        // modify reponse here
        data.time = new Date();

        res.send = oldSend;
        return res.send(data);
    };
    next();
}

export {
    afterRequestInterceptor
}