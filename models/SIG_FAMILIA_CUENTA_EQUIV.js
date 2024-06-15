const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FAMILIA_CUENTA_EQUIV', {
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    grupo_bien_e: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    clase_bien_e: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    familia_bien_e: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    clasificador_e: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mayor_e: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    sub_cta_e: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_FAMILIA_CUENTA_EQUIV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_familia_cuenta_equiv",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "clasificador" },
          { name: "mayor" },
          { name: "sub_cta" },
        ]
      },
    ]
  });
};
