const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_CONTABLE_INM_COMP', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    NMES_PROC_AMC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_CUENTA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FACTOR_AJUSTE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ACM_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ACM_DEP_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ACM_DEP_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_PERIODO: {
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
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TASA_DEPREC_MES: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    HVALOR_DETERIORO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_ADICION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_DISMINUCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_CONTABLE_INM_COMP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MOVIM_CONT_INM_COMP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NMES_PROC_AMC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
          { name: "SEC_CUENTA" },
        ]
      },
    ]
  });
};
