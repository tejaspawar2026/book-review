import express from 'express';
import { bookController } from '../controllers/bookController.js';
import { reviewController } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', bookController.createBook);
router.get('/search', bookController.searchBooks);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/:id/reviews', reviewController.addReview);

export default router;
