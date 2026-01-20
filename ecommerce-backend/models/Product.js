import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  priceCents: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.JSON, // Stores { stars: 4.5, count: 10 }
    allowNull: true
  },
  keywords: {
    type: DataTypes.JSON, // Stores ["socks", "sports"]
    allowNull: true
  }
});