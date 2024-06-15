const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_familia', {
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NOMBRE_FAM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALCANCE_FAM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SBN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_GFIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO_PATRIM: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CLASE_PATRIM: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SUBTIPO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ENVIADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_VISUALIZA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENVIO_CONSUCODE: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_familia',
    schema: 'dbo',
    timestamps: false
  });
};
