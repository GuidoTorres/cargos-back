const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROCESO_DE_SELECCION', {
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
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PAAC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    INDICADOR_PROCESO: {
      type: DataTypes.STRING(2),
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
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_COMPRA: {
      type: DataTypes.STRING(1),
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
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROCESO_DE_SELECCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PROC_DE_SELE_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SIG_PROCESO_DE_SELECCION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
        ]
      },
    ]
  });
};
