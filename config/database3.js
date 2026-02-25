const { Sequelize } = require('sequelize');
const initModels = require('../models3/init_models');

const sequelize3 =  new Sequelize('adeudos', 'usuario', 'root', {
    host: '10.30.1.43',
    dialect: 'mysql',
  });
  
  initModels(sequelize3)

  module.exports = sequelize3;
