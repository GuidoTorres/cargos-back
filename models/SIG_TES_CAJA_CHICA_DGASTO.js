const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_DGASTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_MOVIMTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SEC_GASTO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_GASTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONCEPTO_GASTO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO_GASTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_DGASTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CAJA_CHICA_DGASTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "SEC_MOVIMTO" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SEC_FUNC" },
          { name: "CLASIFICADOR" },
          { name: "SEC_GASTO" },
        ]
      },
    ]
  });
};
