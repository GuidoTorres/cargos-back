const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hoja2', {
    TIPO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FAMILIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hoja2',
    schema: 'dbo',
    timestamps: false
  });
};
