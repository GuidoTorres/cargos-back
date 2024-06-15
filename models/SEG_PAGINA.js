const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_PAGINA', {
    PAGINA: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MODULO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ORDEN: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DESTINO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ALIAS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMAGEN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_PAGINA',
    schema: 'dbo',
    timestamps: false
  });
};
