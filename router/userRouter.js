import express from 'express';
import {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;
