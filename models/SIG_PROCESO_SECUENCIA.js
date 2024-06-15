const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROCESO_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_DE_SELECCION',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_DE_SELECCION',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_DE_SELECCION',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_DE_SELECCION',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ANTECEDENTE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_SECUENCIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_RESOLUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CAUSAL_EXO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    INSTRUMENTO_EXO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUMENTO_EXO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_EXO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOTIVO_ESTADO: {
      type: DataTypes.STRING(250),
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
    TIPO_COMITE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SIGLAS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ID_PROCESO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_PSA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    MODALIDAD_CSC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROCESO_SECUENCIA',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PROCESO_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
        ]
      },
    ]
  });
};
