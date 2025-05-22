import express from 'express';
import { createBook, getBooks, searchBooks, getBookById } from '../controllers/bookController.js';
import { addReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createBook);
router.get('/search', searchBooks);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', addReview);

export default router;
