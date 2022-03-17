import routes from '../routes/index';
import errorHandler from '../middleware/error-handler';
import express from 'express';
import { urlencoded, json } from 'body-parser';
const hbs = require('express-handlebars');
import path from 'path';

const createServer = (): express.Application => {
    const app = express();

    // set middleware
    app.use(urlencoded({ extended: false }));
    app.use(json());
    app.use(errorHandler);

    const publicPath = path.join(__dirname, '../assets');
    app.use('/', express.static(publicPath));

    app.engine('.hbs', hbs.engine({
        defaultLayout: 'layout',
        extname: '.hbs',
        helpers: require('../common/helpers/hbsHelpers')
    }));
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', '.hbs');

    // set routes
    app.use('/', routes);

    return app;
}

export { createServer };

