const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MEJORAS', {
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
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    NRO_MEJORA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    MOTIVO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MES_MEJORA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FECHA_MEJORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CANT_MEJORA: {
      type: DataTypes.DECIMAL(3,0),
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
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(5,0),
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
    VALOR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VIDA_UTIL_ORIG: {
      type: DataTypes.DECIMAL(16,6),
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
    ESTADO: {
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
    TIPO_AJUSTE: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "4"
    },
    IND_VALOR_NETO_1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VIDA_UTIL_MESES_AJUS: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_EXCESO_AJUS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    SECUENCIA_MEJORA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MEJORAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MEJORAS_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_MEJORAS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "NRO_MEJORA" },
        ]
      },
    ]
  });
};
