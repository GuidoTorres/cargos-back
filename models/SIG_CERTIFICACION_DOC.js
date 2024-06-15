const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_DOC', {
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
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ESTADO_PROC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PAAC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_PLAN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REQUERIMIENTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DOCUMENTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_INCLUYE: {
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
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_DOC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CERTIFICA_PAO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
        ]
      },
      {
        name: "PK_SIG_CERTIFICACION_DOC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
