const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_COMPONENTE_NOMBRE_FASE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
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
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_COMPONENTE_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false
  });
};
