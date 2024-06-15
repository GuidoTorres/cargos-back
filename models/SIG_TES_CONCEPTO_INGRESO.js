const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CONCEPTO_INGRESO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SUB_CONCEPTO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    DSC_CONCEPTO: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PRECIO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_concepto: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CONCEPTO_INGRESO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONCEPTO_INGRESO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "CONCEPTO" },
          { name: "SUB_CONCEPTO" },
        ]
      },
    ]
  });
};
