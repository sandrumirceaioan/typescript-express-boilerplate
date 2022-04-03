import routes from '../routes/index';
import express from 'express';
import { urlencoded, json } from 'body-parser';
const hbs = require('express-handlebars');
import path from 'path';
import { errorHandler } from '../common/error/handler';


const createServer = (): express.Application => {
    const app = express();

    // set middleware
    app.use(urlencoded({ extended: false }));
    app.use(json());

    const publicPath = path.join(__dirname, '../assets');
    app.use('/', express.static(publicPath));
    

    app.engine('.hbs', hbs.engine({
        defaultLayout: 'layout',
        extname: '.hbs',
        helpers: require('../common/helpers/hbsHelpers.ts')
    }));
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', '.hbs');

    // set routes
    app.use('/', routes);

    app.use(errorHandler);

    return app;
}

export { createServer };

