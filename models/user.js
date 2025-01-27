const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  membership_start_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
// Define the relationship: One user can have many borrowings
User.hasMany(Borrowing, { foreignKey: 'user_id' });

module.exports = User;
