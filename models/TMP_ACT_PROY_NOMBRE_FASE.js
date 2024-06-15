const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_ACT_PROY_NOMBRE_FASE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    TIPO_ACT_PROY: {
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
    tableName: 'TMP_ACT_PROY_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false
  });
};
