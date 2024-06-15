const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_PRIVILEGIO', {
    NOMBRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRIVILEGIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_PRIVILEGIO',
    schema: 'dbo',
    timestamps: false
  });
};
