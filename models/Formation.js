import { DataTypes } from 'sequelize'
import sequelize from './index.js'

const Formation = sequelize.define('Formation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  schoolName: {
    type: DataTypes.STRING,
  },
  icon: {
    type: DataTypes.STRING,
  },
  iconBg: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  points: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

module.exports = Formation
