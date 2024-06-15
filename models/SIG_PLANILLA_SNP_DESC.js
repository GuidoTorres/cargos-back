const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLANILLA_SNP_DESC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP_DETALLE',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP_DETALLE',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_PLANILLA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP_DETALLE',
        key: 'TIPO_PLANILLA'
      }
    },
    TIPO_PLANILLA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP_DETALLE',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_PLANILLA_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANILLA_SNP_DETALLE',
        key: 'TIPO_PLANILLA'
      }
    },
    SEC_PLANILLA_DESC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DESCUENTO: {
      type: DataTypes.CHAR(2),
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
    tableName: 'SIG_PLANILLA_SNP_DESC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_PLANILLA_SNP__4C6202EE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PLANILLA" },
          { name: "SEC_PLANILLA" },
          { name: "SEC_PLANILLA_DET" },
          { name: "SEC_PLANILLA_DESC" },
        ]
      },
    ]
  });
};
