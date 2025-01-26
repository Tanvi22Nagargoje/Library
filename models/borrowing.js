const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Book = require('./book');

const Borrowing = sequelize.define('Borrowing', {
  borrow_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  return_date: { type: DataTypes.DATE, allowNull: true },
});

Borrowing.belongsTo(User, { foreignKey: 'user_id' });
Borrowing.belongsTo(Book, { foreignKey: 'book_id' });

module.exports = Borrowing;
