const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_USUARIO', {
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CADUCIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FE_ULTIMO_PWD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BLOQUEO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_BLOQUEO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_USUARIO',
    schema: 'dbo',
    timestamps: false
  });
};
