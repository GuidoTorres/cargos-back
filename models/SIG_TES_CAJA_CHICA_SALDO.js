const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_SALDO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_SALDO',
        key: 'SEC_FUNC'
      }
    },
    MONTO_INGRESO: {
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
    tableName: 'SIG_TES_CAJA_CHICA_SALDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_CHICA_SALDO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SEC_FUNC" },
          { name: "CLASIFICADOR" },
        ]
      },
    ]
  });
};
