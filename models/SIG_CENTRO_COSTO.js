const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CENTRO_COSTO', {
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
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_DEPEND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABREVIADO_DEPEND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_DEPEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_PERSONAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_PADRE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_GF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_FLAG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CENTRO_SBN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FLAG_SISMED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PRESUPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_ppr: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ROL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_REGISTRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_pptal: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SecUPs: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CODIGO_ALTERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CENTRO_COSTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_sede_sig_centro_costo",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEDE" },
          { name: "PLIEGO" },
        ]
      },
      {
        name: "IND_SIG_CENTRO_COSTO_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "PLIEGO" },
          { name: "SEDE" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "PK_SIG_CENTRO_COSTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
    ]
  });
};
