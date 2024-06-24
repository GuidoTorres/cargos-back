const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plaza$', {
    plaza: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plaza$',
    schema: 'dbo',
    timestamps: false
  });
};
