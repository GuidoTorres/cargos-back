const { Sequelize } = require('sequelize');
const initModels = require('../models/init-models');

const sequelize = new Sequelize('siga_mef', 'siga_1137', 's1g@*1137', {
  host: '10.30.1.22',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Usar cifrado si es necesario
      trustServerCertificate: true // Solo necesario si estás usando un certificado autofirmado
    }
  },
  logging: false // Desactiva el logging si prefieres
});

initModels(sequelize)




module.exports = sequelize;
