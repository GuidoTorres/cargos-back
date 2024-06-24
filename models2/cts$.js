const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cts$', {
    id_pers: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_banco: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cts$',
    schema: 'dbo',
    timestamps: false
  });
};
