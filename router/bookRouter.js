import express from 'express';
import { createBook, getBooks, getBookById } from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { addReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', authenticate, addReview);

export default router;
