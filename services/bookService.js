import db from '../models/index.js';
import Sequelize from 'sequelize';

export const addBook = async (data) => {
  return await db.Book.create(data);
};

export const fetchBooks = async (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const offset = (page - 1) * limit;
  const search = query.search || '';

  const whereCondition = search
    ? Sequelize.literal(`MATCH (title, author, genre) AGAINST ('${search}' IN NATURAL LANGUAGE MODE)`)
    : {};

  const { count, rows: books } = await db.Book.findAndCountAll({
    where: whereCondition,
    limit,
    offset,
    order: [['createdAt', 'DESC']],
  });

  const totalPages = Math.ceil(count / limit);

  return {
    books,
    totalBooks: count,
    totalPages,
    currentPage: page,
    limit,
  };
};

export const getBookWithPaginatedReviews = async (bookId, page, limit) => {
  const offset = (page - 1) * limit;

  // 1. Get the book
  const book = await db.Book.findByPk(bookId);

  if (!book) return { book: null };

  // 2. Get total number of reviews
  const totalReviews = await db.Review.count({ where: { bookId } });

  // 3. Get paginated reviews
  const reviews = await db.Review.findAll({
    where: { bookId },
    order: [['createdAt', 'DESC']],
    limit,
    offset,
  });

  // 4. Get average rating
  const averageRatingResult = await db.Review.findOne({
    attributes: [[Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating']],
    where: { bookId },
    raw: true,
  });

  const averageRating = averageRatingResult.avgRating
    ? parseFloat(averageRatingResult.avgRating)
    : 0;
  const totalPages = Math.ceil(totalReviews / limit);

  return {
    book,
    averageRating,
    reviews,
    totalReviews,
    totalPages,
    currentPage: page,
    limit,
  };
};