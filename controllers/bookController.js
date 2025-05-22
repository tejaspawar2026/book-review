import { bookService } from '../services/bookService.js';

export const bookController = {
  createBook: async (req, res) => {
    try {
      const book = await bookService.addBook(req.body);
      res.status(201).json({ success: true, message: "Book added successfully", data: book });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
  getBooks: async (req, res) => {
    try {
      const result = await bookService.fetchBooks(req.query);
      res.status(201).json({
        success: true,
        message: "Books fetched successfully",
        data: result.books,
        totalBooks: result.totalBooks,
        totalPages: result.totalPages,
        currentPage: result.currentPage,
        limit: result.limit
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
  searchBooks: async (req, res) => {
    try {
      const result = await bookService.searchAllBooks(req.query);
      res.status(201).json({
        success: true,
        message: "Books fetched successfully",
        data: result.books,
        totalBooks: result.totalBooks,
        totalPages: result.totalPages,
        currentPage: result.currentPage,
        limit: result.limit
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;

      const result = await bookService.getBookWithPaginatedReviews(id, page, limit);

      if (!result.book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }

      res.status(200).json({ success: true, message: 'Book fetched successfully', data: result });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
}