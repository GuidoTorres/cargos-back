const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_SIG_INVENTARIO_FISICO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fecha_movimto: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_SIG_INVENTARIO_FISICO',
    schema: 'dbo',
    timestamps: false
  });
};
