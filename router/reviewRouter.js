import express from 'express';
import { updateReview, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();

router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
