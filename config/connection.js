const Sequelize = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASS,
    {
        host: process.env.DBHOST,
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;