import db from '../models/index.js';

export const findReviewByUserAndBook = async (userId, bookId) => {
  return await db.Review.findOne({ where: { userId, bookId } });
};

export const createReview = async (data) => {
  return await db.Review.create(data);
};

export const changeReview = async (reviewId, userId, updatedData) => {
  const review = await db.Review.findOne({ where: { id: reviewId, userId } });

  if (!review) {
    const error = new Error('Review not found or unauthorized');
    error.statusCode = 404;
    throw error;
  }

  const { content, rating } = updatedData;
  if (content !== undefined) review.content = content;
  if (rating !== undefined) review.rating = rating;

  await review.save();

  return review;
};

export const removeReview = async (reviewId, userId) => {
  const review = await db.Review.findOne({ where: { id: reviewId, userId } });

  if (!review) {
    const error = new Error('Review not found or unauthorized');
    error.statusCode = 404;
    throw error;
  }

  await review.destroy();

  return { message: 'Review deleted successfully' };
};