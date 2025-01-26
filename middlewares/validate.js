const { body, validationResult } = require('express-validator');

// Validation for the User model
exports.validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('membership_start_date').notEmpty().withMessage('Membership start date is required'),
];

// Validation for the Book model
exports.validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('published_year').isInt().withMessage('Published year must be a valid year'),
  body('genre').notEmpty().withMessage('Genre is required'),
];

// Validation for the Borrowing model
exports.validateBorrow = [
  body('user_id').isInt().withMessage('User ID must be a valid integer'),
  body('book_id').isInt().withMessage('Book ID must be a valid integer'),
  body('return_date').optional().isDate().withMessage('Return date must be a valid date'),
];

// Function to check validation results
exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
