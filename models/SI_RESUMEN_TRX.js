const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_RESUMEN_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ID_SI_RESUMEN: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    D_SEC_EJEC: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO_PIM: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MONTO_PEDIDO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MONTO_ORDEN: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MONTO_ENTRADA_ALMACEN: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MONTO_PECOSA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CANT_PEDIDO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_RESUMEN_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
