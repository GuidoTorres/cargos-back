const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FAMILIA_CLAS_EJECUTORA', {
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
    FAMILIA_CLASIFICADOR: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_USER_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ING: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ING: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_MOD: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_FAMILIA_CLAS_EJECUTORA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IDX_SIG_FAMILIA_CLAS_EJECUTORA",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "FAMILIA_CLASIFICADOR" },
          { name: "CLASE_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "FAMILIA_BIEN" },
        ]
      },
      {
        name: "IND_FAMCLAS_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "CLASIFICADOR" },
          { name: "SEC_EJEC" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "ind_sfce_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_FAMILIA_CLAS_EJECUTORA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FAMILIA_CLASIFICADOR" },
        ]
      },
    ]
  });
};
