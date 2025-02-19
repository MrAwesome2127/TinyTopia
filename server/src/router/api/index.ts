import express from 'express';
import{homeRouter} from './home-routes.ts';
import { authRouter } from './auth-routes.ts';

const router = express.Router();
router.use('/homes', homeRouter);
router.use('/auth', authRouter);

export default router;
