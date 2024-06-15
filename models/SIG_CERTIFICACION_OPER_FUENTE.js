const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_OPER_FUENTE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPERACION',
        key: 'SECUENCIA_OPERA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPERACION',
        key: 'SECUENCIA_OPERA'
      }
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPERACION',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_FASE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPERACION',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_OPERA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPERACION',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    SEC_OPERA_FASE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    SEC_MOVIMIENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    ANO_EJE_DOC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJE_DOC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_INTF_SIAF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_FINAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ELIMINADO_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRANSFERENCIA_FINANCIERA_ID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DISPOSITIVO_LEGAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_OPER_FUENTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_cert_oper_fuente_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_CERT_OPER_FUENTE_02",
        fields: [
          { name: "SEC_INTF_SIAF" },
          { name: "FUENTE_FINANC" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SOF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA_FASE" },
          { name: "SECUENCIA_OPERA" },
          { name: "SECUENCIA_DET" },
        ]
      },
    ]
  });
};
