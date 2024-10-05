import { DataTypes } from 'sequelize'
// import { define } from './index.js'
import sequelize from './index.js'

const News = sequelize.define('News', {
  // const News = define('News', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sourceLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedAt: {
    type: DataTypes.DATE,
  },
  readStatus: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

export default News
