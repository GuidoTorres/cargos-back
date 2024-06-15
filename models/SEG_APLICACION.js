const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_APLICACION', {
    APLICACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VIGENCIA_PWD: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    EXPIRACION_PWD: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    LONGITUD_PWD: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    LOGIN_PWD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMERO_PWD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LETRA_PWD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HISTORICO_PWD: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    URLLOGIN: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_APLICACION',
    schema: 'dbo',
    timestamps: false
  });
};
