const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_SECUENCIA_ANULAC', {
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
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_SECUENCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    FASE_ORDEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_FASE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOCUMTO_SIAF: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMTO: {
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
    FLAG_COMPROMETIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_SECUENCIA_ANULAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ORDEN_SECUENCI_ANULAC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_ORDEN" },
        ]
      },
    ]
  });
};
