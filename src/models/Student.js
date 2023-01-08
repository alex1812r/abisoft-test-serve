const { DataTypes } = require('sequelize');
const { database } = require('../db');

const Student = database.define('Student', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY
  },
  dateOfInscription: {
    type: DataTypes.DATEONLY
  },
  cost: {
    type: DataTypes.INTEGER
  },
})

module.exports = { Student };