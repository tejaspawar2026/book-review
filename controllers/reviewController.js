import { findReviewByUserAndBook, createReview } from '../services/reviewService.js';

export const addReview = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { content, rating } = req.body;
    const userId = req.user.user_id;

    const existingReview = await findReviewByUserAndBook(userId, bookId);
    if (existingReview) {
      return res.status(400).json({ error: "You have already reviewed this book." });
    }

    const review = await createReview({ userId, bookId, content, rating });

    res.status(201).json({ status: true, message: "Review added successfully", data: review });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};