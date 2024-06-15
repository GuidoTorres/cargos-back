const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUENTA_CONCESION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MAYOR_ACTIVO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_ACTIVO: {
      type: DataTypes.STRING(8),
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
    MAYOR_DEPR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DEPR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUENTA_CONCESION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CUENTA_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "IND_CUENTA_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR_DEPR" },
          { name: "SUB_CTA_DEPR" },
        ]
      },
      {
        name: "IND_CUENTA_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR_ACTIVO" },
          { name: "SUB_CTA_ACTIVO" },
        ]
      },
      {
        name: "PK_SIG_CTA_CONCESION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
