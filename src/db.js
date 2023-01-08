const { Sequelize  } = require('sequelize');

const database = new Sequelize('basic', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { database };