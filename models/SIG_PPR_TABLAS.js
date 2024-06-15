const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_TABLAS', {
    COD_TABLA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    COD_DETALLE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRI_DETALLE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PARAMETRO1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PARAMETRO2: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_TABLAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "XPKSIG_PPR_TABLAS",
        unique: true,
        fields: [
          { name: "COD_TABLA" },
          { name: "COD_DETALLE" },
        ]
      },
    ]
  });
};
