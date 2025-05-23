import { reviewService } from '../services/reviewService.js';

export const reviewController = {
  addReview: async (req, res) => {
    try {
      const bookId = req.params.id;
      const { content, rating } = req.body;
      const userId = req.user.user_id;

      const existingReview = await reviewService.findReviewByUserAndBook(userId, bookId);
      if (existingReview) {
        return res.status(400).json({ error: "You have already reviewed this book." });
      }

      const review = await createReview({ userId, bookId, content, rating });

      res.status(201).json({ status: true, message: "Review added successfully", data: review });
    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }
  },
  updateReview: async (req, res) => {
    try {
      const userId = req.user.user_id;
      const reviewId = req.params.id;
      const updatedData = req.body;

      const result = await reviewService.changeReview(reviewId, userId, updatedData);
      res.status(200).json({ status: true, message: "Review updated successfully", data: result });
    } catch (err) {
      res.status(err.statusCode).json({ status: false, error: err.message });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const userId = req.user.user_id;
      const reviewId = req.params.id;

      const result = await reviewService.removeReview(reviewId, userId);
      res.status(200).json({ status: true, message: result.message });
    } catch (err) {
      res.status(err.statusCode).json({ status: false, error: err.message });
    }
  }
}