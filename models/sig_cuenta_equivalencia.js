const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_cuenta_equivalencia', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_modalidad: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    item_cuenta: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    mayor_new: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sub_cta_new: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG_FAMILIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_cuenta_equivalencia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CUENTA_EQUIV_01",
        fields: [
          { name: "sec_ejec" },
          { name: "tipo_modalidad" },
          { name: "secuencia" },
        ]
      },
      {
        name: "IND_SIG_CUENTA_EQUIV_02",
        fields: [
          { name: "ano_eje" },
          { name: "mayor_new" },
          { name: "sub_cta_new" },
        ]
      },
      {
        name: "IND_SIG_CUENTA_EQUIV_03",
        fields: [
          { name: "mayor" },
          { name: "sub_cta" },
        ]
      },
      {
        name: "pk_cuenta_equi",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "tipo_modalidad" },
          { name: "item_cuenta" },
        ]
      },
    ]
  });
};
