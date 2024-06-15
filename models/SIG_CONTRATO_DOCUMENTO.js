const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_DOCUMENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_DOCUMENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_CARTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_INICIAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_DEVOLUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOC_DEVOLUCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_EJECUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOC_EJECUCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_RENOVACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.TEXT,
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
    tableName: 'SIG_CONTRATO_DOCUMENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CONTRATO_DOC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
        ]
      },
      {
        name: "PK_SIG_CONTRATO_DOCUMENTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "SEC_DOCUMENTO" },
        ]
      },
    ]
  });
};
