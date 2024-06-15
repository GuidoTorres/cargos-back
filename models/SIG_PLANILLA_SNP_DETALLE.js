const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLANILLA_SNP_DETALLE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_PLANILLA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP',
        key: 'TIPO_PLANILLA'
      }
    },
    TIPO_PLANILLA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_PLANILLA_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_BRUTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_BRUTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MONTO_NETO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SEC_PERIODO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_PAGO_PLANILLA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MONTO_NETO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONTO_DESC_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_DESC_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_ADDENDA: {
      type: DataTypes.CHAR(1),
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
    SEC_MOVIMIENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_ADDENDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_CONTRATO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PLANILLA_SNP_DETALLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_PLANILLA_SNP__49859643",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PLANILLA" },
          { name: "SEC_PLANILLA" },
          { name: "SEC_PLANILLA_DET" },
        ]
      },
    ]
  });
};
