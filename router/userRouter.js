import express from 'express';
import { registerUser, fetchAllUsers, fetchUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.get('/', fetchAllUsers);
router.get('/:id', fetchUserById);

export default router;
