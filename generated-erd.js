const sequelizeErd = require('sequelize-erd');
const sequelize = require('./config/database'); // Ajusta el camino a tu archivo de configuración de Sequelize
const initModels = require('./models/init-models'); // Ajusta el camino a tu archivo init-models

// Inicializa los modelos
initModels(sequelize);

// Generar el ERD y guardarlo como un archivo SVG
sequelizeErd({ source: sequelize })
  .then(svg => {
    const fs = require('fs');
    fs.writeFileSync('erd.svg', svg);
    console.log('ERD generado con éxito: erd.svg');
  })
  .catch(error => {
    console.error('Error al generar el ERD:', error);
  });
