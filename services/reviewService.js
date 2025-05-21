import db from '../models/index.js';

export const createReview = async (userData) => {
  return await db.Review.create(userData);
};