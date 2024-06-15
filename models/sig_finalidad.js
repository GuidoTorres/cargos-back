const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_finalidad', {
    ANO_EJE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FINALIDAD: {
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
    tableName: 'sig_finalidad',
    schema: 'dbo',
    timestamps: false
  });
};
