const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_PPTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_FASE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_OPERA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_OPER_FUENTE',
        key: 'SECUENCIA_OPERA'
      }
    },
    SECUENCIA_PPTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_PPTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_certificacion_ppto_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SOP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA_FASE" },
          { name: "SECUENCIA_OPERA" },
          { name: "SECUENCIA_DET" },
          { name: "SECUENCIA_PPTO" },
        ]
      },
    ]
  });
};
