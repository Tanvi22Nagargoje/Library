const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('library_db',  'postgres', 'tanvi', {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

module.exports = sequelize;
