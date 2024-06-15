const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DESP_DOC_RENDIDO', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_OPC: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_DETA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_PLA_PAS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    TIPO_DOCU: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    SEC_DOCU: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_ITEM_DOCU: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_DOCU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_DOCU: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RAZON_SOCIAL: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MNTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_EJEC1: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC1: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ANO_EJEC2: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    CONCEPTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COD_DOC: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DESP_DOC_RENDIDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DESP_DOCREND",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_TIPO" },
          { name: "SEC_ITEM_TIPO" },
          { name: "SEC_ITEM_OPC" },
          { name: "SEC_ITEM_DETA" },
        ]
      },
    ]
  });
};
