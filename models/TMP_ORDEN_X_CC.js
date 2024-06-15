const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_ORDEN_X_CC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NRO_MES: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false
    },
    NOMBRE_CC_ORD: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    IDENTIFICADOR: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMP_ORDEN_X_CC',
    schema: 'dbo',
    timestamps: false
  });
};
