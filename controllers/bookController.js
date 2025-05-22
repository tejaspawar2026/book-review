import { addBook, fetchBooks, getBookWithPaginatedReviews, searchBooks } from '../services/bookService.js';

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
    const books = await fetchBooks(req.query);
    res.status(201).json({ success: true, message:"Books fetched successfully", data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    
    const result = await getBookWithPaginatedReviews(id, page, limit);
    
    if (!result.book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    
    res.status(200).json({
      success: true,
      message: 'Book fetched successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const search = async (req, res) => {
  try {
    const books = await searchBooks(req.query);
    res.status(201).json({ success: true, message:"Books fetched successfully", data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};