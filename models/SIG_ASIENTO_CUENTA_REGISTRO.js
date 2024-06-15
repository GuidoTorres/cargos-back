const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ASIENTO_CUENTA_REGISTRO', {
    TIPO_INSTITUCIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_EDIFICACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MODALIDAD_INM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COD_MODALIDAD_UA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
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
    SUB_CTA_SUP_REP_1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO_CUENTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ASIENTO_CUENTA_REGISTRO',
    schema: 'dbo',
    timestamps: false
  });
};
