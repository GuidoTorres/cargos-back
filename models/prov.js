const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prov', {
    RUC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GIRO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_PERSONA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_CONTRASTISTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TELEFONO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prov',
    schema: 'dbo',
    timestamps: false
  });
};
