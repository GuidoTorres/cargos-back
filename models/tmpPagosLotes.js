const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpPagosLotes', {
    COD_LOTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ADJUDICATARIO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    COSTO: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    TOT_INIC: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    OPCION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CUOT_12: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    CUOT_18: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    CUOT_24: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    CUOT_36: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    TOTAL_PAGOS: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    VALOR_CUOTA: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    COSTO_TOT: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpPagosLotes',
    schema: 'dbo',
    timestamps: false
  });
};
