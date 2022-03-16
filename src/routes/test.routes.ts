import express from 'express';
const router = express.Router();
import { testController } from '../controller/test.controller';

router.get('/status', [testController]);

// Default route
router.get('*', (req, res) => {
    res.redirect('/test/status');
  });

export default router;