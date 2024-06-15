const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRATEGIA_NACIONAL_TMP', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ESTRATEGIA_NACIONAL_TMP',
    schema: 'dbo',
    timestamps: false
  });
};
