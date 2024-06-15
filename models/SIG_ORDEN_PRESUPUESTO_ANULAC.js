const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_PRESUPUESTO_ANULAC', {
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
    SEC_PPTO: {
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
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
    MES_CALE: {
      type: DataTypes.STRING(2),
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
    CUSER_SIAF: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SECUENCIAL: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    ESTADO_EXP: {
      type: DataTypes.STRING(1),
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
    CICLO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FASE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SECUENCIA_EXPEDIENTE: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    CORRELATIVO: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_PRESUPUESTO_ANULAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ORDEN_PRESUP_ANULAC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_ORDEN" },
          { name: "SEC_PPTO" },
        ]
      },
    ]
  });
};
