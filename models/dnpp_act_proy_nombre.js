const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnpp_act_proy_nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    tipo_act_proy: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    tableName: 'dnpp_act_proy_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
