const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_ITEM_PPTO_ANULAC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA_ANULAC',
        key: 'TIPO_PPTO'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_PPTO: {
      type: DataTypes.DECIMAL(3,0),
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
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MNTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MNTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    VALOR_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_IMPTO_SOLES: {
      type: DataTypes.DECIMAL(14,2),
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
    CANT_MODIF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MNTO_SOLES_MODIF: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_FUNC_ENCARGO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CANT_RECIBIDA_PPTO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    TIPO_PAGO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_RECURSO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_COMPROMISO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_ITEM_PPTO_ANULAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ORDEN_ITEM_PPTO_ANULAC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_ORDEN" },
          { name: "SEC_ITEM" },
          { name: "SEC_ITEM_PPTO" },
        ]
      },
    ]
  });
};
