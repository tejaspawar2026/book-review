import { addBook, fetchBooks } from '../services/bookService.js';

export const createBook= async (req, res) => {
  try {
    const book = await addBook(req.body);
    res.status(201).json({ success: true, message:"Book added successfully", data: book });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await fetchBooks();
    res.status(201).json({ success: true, message:"Books fetched successfully", data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await fetchBookById(id);
    res.status(201).json({ success: true, message:"Book fetched successfully", data: book });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
