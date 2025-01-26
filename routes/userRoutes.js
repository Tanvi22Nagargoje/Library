const express = require('express');
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/', getUsers); // Get all users
router.get('/:id', getUserById); // Get a user by ID
router.post('/', addUser); // Add a new user
router.put('/:id', updateUser); // Update a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

module.exports = router;
