const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_sub_programa_nombre', {
    ANO_EJE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMBITO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ES_PRESUPUESTAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    F7: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_sub_programa_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
