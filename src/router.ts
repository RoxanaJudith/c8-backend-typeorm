import { Router } from 'express';
import authRouter from './modules/auth/auth.routes';
import userRouter from './modules/user/user.routes';

const apiRouter = Router();

// modules
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);

export default apiRouter;
