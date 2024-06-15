const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_KIT_ITEMS_EST_BK', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CANT_KITS: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_KITS: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_KIT_ITEMS_EST_BK',
    schema: 'dbo',
    timestamps: false
  });
};
