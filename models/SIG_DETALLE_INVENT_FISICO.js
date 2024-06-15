const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_INVENT_FISICO', {
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
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FLAG_UBICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_VERIF_DIGITAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_INVENT_FISICO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_INV_FIS_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_DET_INV_FIS_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_INVENTARIO" },
        ]
      },
      {
        name: "IND_SIG_DET_INVENT_FISICO_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "ANO_EJE" },
          { name: "NRO_INVENTARIO" },
          { name: "FLAG_UBICA" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_DET_INV_FIS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "NRO_INVENTARIO" },
        ]
      },
    ]
  });
};
