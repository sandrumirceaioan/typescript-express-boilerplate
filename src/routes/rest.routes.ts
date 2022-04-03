import express from 'express';
const router = express.Router();
import { apiController } from '../controller/api/api.controller';

router.get('/', [apiController]);

// Default route
// router.get('*', (req, res) => {
//     res.redirect('/test/status');
//   });

export default router;