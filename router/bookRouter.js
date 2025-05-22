import express from 'express';
import { createBook, getBooks, getBookById, search } from '../controllers/bookController.js';
import { addReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', addReview);
router.get('/search', search);

export default router;
