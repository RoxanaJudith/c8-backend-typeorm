import { NextFunction, Request, Response } from 'express';
import authService from './auth.service';

const register = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = authService.register();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export default { register };
