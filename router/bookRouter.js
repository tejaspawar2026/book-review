import express from 'express';
import { createBook, getBooks, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);

export default router;
