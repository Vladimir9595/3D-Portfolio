import { DataTypes } from 'sequelize'
import sequelize from './index.js'

const Project = sequelize.define('Project', {
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
  tags: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sourceCodeLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectCodeLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSchoolProject: {
    type: DataTypes.BOOLEAN,
  },
  isWorkProject: {
    type: DataTypes.BOOLEAN,
  },
  isPersonalProject: {
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

export default Project
