import express from 'express';
const router = express.Router();
import testRoutes from './test.routes';
import restRoutes from './rest.routes';
import { beforeRequestLogger } from '../common/middleware/request-logger';
import { afterRequestInterceptor } from '../common/middleware/request-interceptor';

// routes used for testing
router.use('/', testRoutes);

// routes used for testing
router.use('/api', beforeRequestLogger, /* afterRequestInterceptor */ restRoutes);

export default router;