const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PRG_TABLAS_TRANSFER', {
    SEC_TTRANSFER: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_TABLA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_CAMPO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESC_CAMPO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PARAMETRO_1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PARAMETRO_2: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PRG_TABLAS_TRANSFER',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRG_TABLAS_TRANSFER",
        unique: true,
        fields: [
          { name: "SEC_TTRANSFER" },
        ]
      },
    ]
  });
};
