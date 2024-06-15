const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DET_ADMINISTRATIVO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    TIPO_ACTO_ADM: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    FECHA_RETORNO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO_CONSERV_ORIG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VIDA_UTIL_ORIG: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    TASA_DEPREC_ORIG: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    FEC_FIN_VIDA_ORIG: {
      type: DataTypes.DATE,
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
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(20),
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
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1",
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_SINABIP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    DEPREC_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DET_ADMINISTRATIVO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DET_MOVIM_ADM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_EJE" },
          { name: "TIPO_ACTO_ADM" },
          { name: "TIPO_PATRIMONIO" },
          { name: "NRO_MOVIMTO" },
          { name: "NRO_SECUENCIA" },
        ]
      },
    ]
  });
};
