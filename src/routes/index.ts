import express from 'express';
const router = express.Router();
import testRoutes from './test.routes';

// routes used for testing
router.use('/', testRoutes);

export default router;