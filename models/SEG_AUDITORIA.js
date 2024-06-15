const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_AUDITORIA', {
    CODIGO: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: false
    },
    TIPO: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_AUDITORIA',
    schema: 'dbo',
    timestamps: false
  });
};
