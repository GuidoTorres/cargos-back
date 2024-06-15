const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_DET',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_FASE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FASE_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_COMPROMETIDO: {
      type: DataTypes.STRING(1),
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
    SEC_MOVIMIENTO_CONT: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    TIPO_DOCU_OPE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_TIPO_RP: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_DOCUMENTO_RP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_REA_PPTO_DOC',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_TIPO_DOCU: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_MONEDA_RP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SOLES_RP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONT_SECUENCIA_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "ANO_PROCESO" },
        ]
      },
      {
        name: "PK_SIG_CONTRATO_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "ANO_PROCESO" },
          { name: "SEC_FASE" },
        ]
      },
    ]
  });
};
