const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_TIPO_AUDITORIA', {
    CODIGO: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: false
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_TIPO_AUDITORIA',
    schema: 'dbo',
    timestamps: false
  });
};
