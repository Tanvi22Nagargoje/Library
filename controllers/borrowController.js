const Borrowing = require('../models/borrowing');
const User = require('../models/user');
const Book = require('../models/book');

// Get all borrowings
const getBorrowings = async (req, res) => {
  try {
    const borrowings = await Borrowing.findAll();
    res.json(borrowings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching borrowings' });
  }
};

// Get borrowings by user ID
const getBorrowingsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const borrowings = await Borrowing.findAll({
      where: { user_id: userId },
      include: [User, Book]
    });

    if (!borrowings) {
      return res.status(404).json({ message: 'No borrowings found for this user' });
    }

    res.json(borrowings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching borrowings' });
  }
};

// Borrow a book
const borrowBook = async (req, res) => {
  try {
    const { user_id, book_id } = req.body;

    const user = await User.findByPk(user_id);
    const book = await Book.findByPk(book_id);

    if (!user || !book) {
      return res.status(404).json({ message: 'User or Book not found' });
    }

    const borrowing = await Borrowing.create({ user_id, book_id });
    res.status(201).json(borrowing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error borrowing book' });
  }
};

// Return a borrowed book
const returnBook = async (req, res) => {
  try {
    const { borrowing_id } = req.body;

    const borrowing = await Borrowing.findByPk(borrowing_id);

    if (!borrowing) {
      return res.status(404).json({ message: 'Borrowing record not found' });
    }

    borrowing.return_date = new Date();
    await borrowing.save();
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error returning book' });
  }
};

module.exports = { getBorrowings, borrowBook, returnBook, getBorrowingsByUser };
