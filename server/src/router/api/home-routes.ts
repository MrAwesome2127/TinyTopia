import express from 'express';
import type { Request, Response } from 'express';
import { Home } from '../../models/index.ts';

const router = express.Router();

router.get('/homes', async (req: Request, res: Response) => {
    try {
        const homes = await Home.findAll();
        res.json(homes);
    } catch (error) {
        console.error('Error fetching homes', error);
        res.status(500).json({ message: 'Error fetching homes' });
    }
});

router.get('/homes/:modelName', async (req: Request, res: Response) => {
    try {
        const home = await Home.findOne({ where: { modelName: req.params.modelName } });
        if (!home) {
            res.status(404).json({ message: 'Home not found' });
            return;
        }

        res.json(home);
    } catch (error) {
        console.error('Error fetching home', error);
        res.status(500).json({ message: 'Error fetching home' });
    }
});

export {router as homeRouter};