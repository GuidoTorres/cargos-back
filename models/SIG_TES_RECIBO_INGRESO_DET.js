const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_RECIBO_INGRESO_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_RECIBO_INGRESO',
        key: 'SEC_RECIBO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_RECIBO_INGRESO',
        key: 'SEC_RECIBO'
      }
    },
    SEC_RECIBO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_RECIBO_INGRESO',
        key: 'SEC_RECIBO'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_CONCEPTO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PRECIO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    SUB_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ANO_EJE_RP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_RP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECUENCIA_RP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    tipo_cambio: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    RESP_CAJA: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_RECIBO_INGRESO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_RECI_INGR_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_RECIBO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
