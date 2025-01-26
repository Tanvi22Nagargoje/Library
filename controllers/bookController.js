const Book = require('../models/book');



const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: 'No books found' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching books' });
  }
};


// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;  // Get the id from the request parameters
    const book = await Book.findByPk(id);  // Find the book by ID

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });  // If no book found, send a 404 error
    }

    res.json(book);  // Return the found book
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching the book' });
  }
};

// Add a new book
const addBook = async (req, res) => {
  try {
    const { title, author, published_year, genre } = req.body;
    const book = await Book.create({ title, author, published_year, genre });
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating book' });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, published_year, genre } = req.body;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.published_year = published_year || book.published_year;
    book.genre = genre || book.genre;

    await book.save();
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating book' });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting book' });
  }
};

module.exports = { getBooks, getBookById, addBook, updateBook, deleteBook };
