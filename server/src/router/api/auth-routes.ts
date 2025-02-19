import express from 'express';
import type { Request, Response } from 'express';


const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        // For testing purposes - will be replaced with actual authentication logic
        res.json({ token: 'test-token' });
    } catch (error) {
        console.error('Error logging in', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

export { router as authRouter }; // Matches the export pattern from home-routes

