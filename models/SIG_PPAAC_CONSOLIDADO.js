const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPAAC_CONSOLIDADO', {
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
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_INICIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_FINAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_CONS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_PROPUESTO: {
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
      type: DataTypes.STRING(6),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_PLAN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    FECHA_TCAMBIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_COMPRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MODAL_COMPRA: {
      type: DataTypes.STRING(2),
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
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOR_CMN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_PPAAC_CONSOLIDADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PPAAC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_CONSOLID" },
          { name: "TIPO_BIEN" },
        ]
      },
      {
        name: "IND_SIG_PPAAC_CONS_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SIG_PPAAC_CONSOLID",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
        ]
      },
    ]
  });
};
