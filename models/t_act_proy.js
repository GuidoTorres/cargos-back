const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_act_proy', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ACT_PROY: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_act_proy',
    schema: 'dbo',
    timestamps: false
  });
};
