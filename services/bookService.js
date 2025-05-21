import db from '../models/index.js';

export const addBook = async (data) => {
  return await db.Book.create(data);
};

export const fetchBooks = async () => {
  return await db.Book.findAll();
};

export const fetchBookById = async (id) => {
  const book = await db.Book.findByPk(id);
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
};