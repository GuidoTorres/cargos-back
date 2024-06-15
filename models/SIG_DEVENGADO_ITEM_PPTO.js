const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVENGADO_ITEM_PPTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_ITEM',
        key: 'SEC_ITEM'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_ITEM',
        key: 'SEC_ITEM'
      }
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_ITEM',
        key: 'SEC_ITEM'
      }
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_ITEM',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_ITEM',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM_PPTO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    EXP_SIGA_DOC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    EXP_SIGA_SECU: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SECU_SIAF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CORR_SIAF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHA_SIAF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_EXP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECUENCIAL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVENGADO_ITEM_PPTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_DEVENGADO_ITEM_PPTO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
          { name: "SEC_ITEM" },
        ]
      },
      {
        name: "PK_SIG_DEVENGADO_ITEM_PPTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
          { name: "SEC_ITEM" },
          { name: "SEC_ITEM_PPTO" },
        ]
      },
    ]
  });
};
