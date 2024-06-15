const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnpp_sub_programa_nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dnpp_sub_programa_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
