const { Sequelize } = require('sequelize');
const initModels2 = require('../models2/init-models');

const sequelize2 =  new Sequelize('planilla', 'sa', 'R3pr3s4sLl3n4s', {
    host: '10.30.1.28',
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true, // Usar cifrado si es necesario
        trustServerCertificate: true // Solo necesario si estás usando un certificado autofirmado
      }
    },
    logging: true // Desactiva el logging si prefieres
  });
  
  initModels2(sequelize2)

  module.exports = sequelize2;
