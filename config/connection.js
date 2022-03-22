// configure dotenv package to use environment variable
require('dotenv').config();
const Sequelize = require('sequelize');

// instantiate sequelize with postgres database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    dialect: 'postgres'
});

module.exports = sequelize;