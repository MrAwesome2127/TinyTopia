import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (authHeader) {
        const token = authHeader && authHeader.split(' ')[1];
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
                if (err) {
                    return res.sendStatus(403).json({ message: 'Invalid token' });
                }
                req.user = decoded as JwtPayload;
                return next();
            });
        } else {
            res.sendStatus(401).json({ message: 'Token not provided' });
        }
    } else {
        res.sendStatus(401).json({ message: 'Authorization header not provided' });
    }
      
    
};