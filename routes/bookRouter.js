import express from 'express';
import { createBookHandler, getBooksHandler } from '../controllers/bookController.js';

const router = express.Router();

router.post('/add_book', createBookHandler);
router.get('/get_books', getBooksHandler);

export default router;
