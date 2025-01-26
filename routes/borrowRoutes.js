const express = require('express');
const { getBorrowings, borrowBook, returnBook, getBorrowingsByUser } = require('../controllers/borrowController');
const router = express.Router();

// Define routes
router.get('/', getBorrowings); // Get all borrowings
router.get('/user/:userId', getBorrowingsByUser); // Get borrowings by user ID
router.post('/borrow', borrowBook); // Borrow a book
router.post('/return', returnBook); // Return a borrowed book

module.exports = router;
