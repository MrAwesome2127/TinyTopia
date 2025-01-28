import { homeRouter } from './home-routes.ts';
import express from 'express';
const router = express.Router();

router.use('/homes', homeRouter);

export default router;
