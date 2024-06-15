const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_ROL_PAGINA', {
    ROL: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    PAGINA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_ROL_PAGINA',
    schema: 'dbo',
    timestamps: false
  });
};
