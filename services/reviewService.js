import db from '../models/index.js';

export const findReviewByUserAndBook = async (userId, bookId) => {
  return await db.Review.findOne({ where: { userId, bookId } });
};

export const createReview = async (data) => {
  return await db.Review.create(data);
};