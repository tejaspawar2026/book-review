import { createBook, getBooks } from '../services/bookService.js';

export const createBookHandler = async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(201).json({ success: true, message:"Book added successfully", data: book });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getBooksHandler = async (req, res) => {
  try {
    const books = await getBooks();
    res.status(201).json({ success: true, message:"Books fetched successfully", data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
