import express from 'express';
import type { Request, Response } from 'express';
import { Home } from '../../../server/src/models/index.ts';  // Import the Home model

const router = express.Router();

// GET /Home - Get all jokes
router.get('/', async (_req: Request, res: Response) => {
  try {
    const homes = await Home.findAll();
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /homes/:id - Get joke by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const home  = await Home.findByPk(req.params.id);
    if (home) {
      res.status(200).json(home);
    } else {
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as homeRouter };
