import routes from '../routes/index';
import errorHandler from '../middleware/error-handler';
import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';

const createServer = (): express.Application => {
    const app = express();
    app.use(urlencoded({limit: '10mb', extended: true}));
    app.use(json({limit: '10mb'}));
    app.use(cors());

    app.disable('x-powered-by');

    app.get('/health', (_req, res) => {
        res.send('UP');
    });

    app.use('/', routes);
    app.use(errorHandler);

    return app;
}

export { createServer };

