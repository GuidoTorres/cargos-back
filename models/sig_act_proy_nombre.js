const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_act_proy_nombre', {
    ANO_EJE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_ACT_PROY: {
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
    PROYECTO_SNIP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    F9: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_act_proy_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
