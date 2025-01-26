const express = require('express');
const app = express();

// Import the routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register the routes with the /api prefix
app.use('/api/books', bookRoutes); // Book routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/borrow', borrowRoutes); // Borrow routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
