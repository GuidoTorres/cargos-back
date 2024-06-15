const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_componente_nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    COMPONENTE: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    TIPO_COMPONENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_componente_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
