import express from 'express';
import bookRoutes from './bookRouter.js';
import userRoutes from './userRouter.js';
import authRoutes from './authRouter.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.use('/auth', authRoutes);

router.use(authenticate);

router.use('/user', userRoutes);
router.use('/books', bookRoutes);

export default router;
