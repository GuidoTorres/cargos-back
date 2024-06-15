const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_ITEM_ANULAC', {
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
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CANT_ITEM: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PREC_UNIT_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PREC_TOT_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PREC_TOT_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CANT_RECIBIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FLAG_RECEP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_RECEP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.DECIMAL(5,0),
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
    ESPECIFICACIONES: {
      type: DataTypes.TEXT,
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
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PLAZO_ENTREGA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    PLAZO_GARANTIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_EXO_IMPTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PREC_VENTA_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PREC_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PREC_VENTA_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PREC_IMPTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_CREDITO_FISCAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_ITEM_ANULAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ORDEN_ITEM_ANULAC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_ORDEN" },
          { name: "SEC_ITEM" },
        ]
      },
    ]
  });
};
