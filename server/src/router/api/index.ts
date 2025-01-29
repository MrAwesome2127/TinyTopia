import express from 'express';
import{homeRouter} from './home-routes.ts';

const router = express.Router();
router.use('/homes', homeRouter);

export default router;
