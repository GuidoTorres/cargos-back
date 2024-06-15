const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MAESTRO_BK', {
    cod_maestro: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_dato: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    modificable: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    digito: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MAESTRO_BK',
    schema: 'dbo',
    timestamps: false
  });
};
