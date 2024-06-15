const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FAMILIA_CUENTAT', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_CUENTA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_CLASIFICADOR: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
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
    SUB_CTA_DET: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
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
    tableName: 'SIG_FAMILIA_CUENTAT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_familia_cuentat_01",
        fields: [
          { name: "FECHA_ING" },
        ]
      },
      {
        name: "ind_sig_familia_cuentat_02",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "CLASIFICADOR" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "IND_TMP_FAMCTA01",
        fields: [
          { name: "ANO_EJE" },
          { name: "FAMILIA_CUENTA" },
        ]
      },
      {
        name: "PK_SIG_FAMILIA_CUENTAT",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FAMILIA_CUENTA" },
        ]
      },
    ]
  });
};
