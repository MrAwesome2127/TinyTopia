import apiRoutes from '../../../../client/src/api/index';
import express from 'express';
const router = express.Router();
router.use('/api', apiRoutes);
export default router;
