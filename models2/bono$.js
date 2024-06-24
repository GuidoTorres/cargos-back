const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bono$', {
    NRO: {
      type: DataTypes.FLOAT,
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
    ID_PERS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bono$',
    schema: 'dbo',
    timestamps: false
  });
};
