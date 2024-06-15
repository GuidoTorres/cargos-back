const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_equivalencia_ue', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    sec_eje_eq: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_equivalencia_ue',
    schema: 'dbo',
    timestamps: false
  });
};
