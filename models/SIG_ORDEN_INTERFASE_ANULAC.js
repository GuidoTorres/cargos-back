const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_INTERFASE_ANULAC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    SEC_INTF: {
      type: DataTypes.DECIMAL(2,0),
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
    INTF_CER: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    INTF_CERSE: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_INTERFASE_ANULAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ORDEN_INTF_ANULAC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_ORDEN_INTERFASE_ANULAC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_INTF" },
        ]
      },
    ]
  });
};
