const { Sequelize } = require('sequelize');
const initModels = require('../models3/init_models');

const sequelize3 =  new Sequelize('adeudos', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
  });
  
  initModels(sequelize3)

  module.exports = sequelize3;
