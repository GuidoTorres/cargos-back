const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEPTIEMBRE2022$', {
    CODIGO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ID_PERS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NU_DOCU: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BVACA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ALIM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AP_PATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AP_MATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DE_NOMB: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEPTIEMBRE2022$',
    schema: 'dbo',
    timestamps: false
  });
};
