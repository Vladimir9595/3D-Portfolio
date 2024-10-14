import { DataTypes } from 'sequelize'
import { define } from './index.js'

const Experience = define('Experience', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  companyName: {
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
  dateColor: {
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

module.exports = Experience
