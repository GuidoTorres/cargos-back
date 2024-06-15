const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_SIG_DETALLE_INVENT_FISICO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    FLAG_UBICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_SIG_DETALLE_INVENT_FISICO',
    schema: 'dbo',
    timestamps: false
  });
};
