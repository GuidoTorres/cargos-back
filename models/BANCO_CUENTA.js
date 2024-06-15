const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BANCO_CUENTA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SEC_CUENTA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ANO_CUENTA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    NRO_CUENTA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TIPO_CUENTA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
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
    PROYECTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BANCO_CUENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BANCO_CTA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "BANCO" },
          { name: "SEC_CUENTA" },
        ]
      },
    ]
  });
};
