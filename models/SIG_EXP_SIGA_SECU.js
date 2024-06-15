const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EXP_SIGA_SECU', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA_DOCU',
        key: 'TIPO_PPTO'
      }
    },
    EXP_SIGA_DOC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA_DOCU',
        key: 'TIPO_PPTO'
      }
    },
    EXP_SIGA_SECU: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_SECUENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
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
    MEJOR_FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_SECUENCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_COMPROMETIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SECUENCIAL: {
      type: DataTypes.STRING(20),
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
    ESTADO_EXP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXP_SIGA_SECU_ORIG: {
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
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_INTERFASE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    SERIE_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NRO_ORDEN_SOS: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_BIEN_SOS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    },
    SEC_ORDEN_SOS: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_ORDEN_SECUENCIA',
        key: 'TIPO_PPTO'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_EXP_SIGA_SECU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_EXP_SIGA_SECU_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PPTO" },
          { name: "EXP_SIGA" },
          { name: "EXP_SIGA_DOC" },
        ]
      },
      {
        name: "PK_SIG_EXP_SIGA_SECU",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PPTO" },
          { name: "EXP_SIGA" },
          { name: "EXP_SIGA_DOC" },
          { name: "EXP_SIGA_SECU" },
        ]
      },
    ]
  });
};
