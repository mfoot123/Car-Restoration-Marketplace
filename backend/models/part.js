const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite')
});

const Part = sequelize.define('Part', {
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

sequelize.sync({ force: true }).then(() => {
  Part.bulkCreate([
    { image: "https://via.placeholder.com/150", name: "Part 1", price: 10.99, quantity: 100, description: "Description for Part 1" },
    { image: "https://via.placeholder.com/150", name: "Part 2", price: 20.99, quantity: 150, description: "Description for Part 2" },
    { image: "https://via.placeholder.com/150", name: "Part 3", price: 30.99, quantity: 200, description: "Description for Part 3" }
  ]);
});

module.exports = Part;
