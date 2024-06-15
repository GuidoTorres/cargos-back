const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_SALDO_PAO', {
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
    MONTO_PROYECTA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_EGRESO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_SALDO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_SALDO_PAO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_SALDO_PAO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SEC_FUNC" },
          { name: "CLASIFICADOR" },
        ]
      },
    ]
  });
};
