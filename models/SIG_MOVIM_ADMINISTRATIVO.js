const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_ADMINISTRATIVO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACTO_ADM: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_REGISTRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_RESOLUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EMPLEADO_AUTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NOMBRE_ENTIDAD: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IND_PUBLICA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESP_RECEPCION: {
      type: DataTypes.STRING(150),
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
    FECHA_FIN_RENOVACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DOC_RENOVACION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1",
      primaryKey: true
    },
    FECHA_DOC_RENOVACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_BENEFICIARIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RUC_BENEFICIARIO: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_ADMINISTRATIVO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MOVIM_ADM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_EJE" },
          { name: "TIPO_ACTO_ADM" },
          { name: "TIPO_PATRIMONIO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
    ]
  });
};
