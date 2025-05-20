import db from '../models/index.js';

export const createBook = async (data) => {
  return await db.Book.create(data);
};

export const getBooks = async () => {
  return await db.Book.findAll();
};
