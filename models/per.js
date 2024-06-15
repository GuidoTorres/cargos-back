const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('per', {
    SEC_EJEC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_COMPLETO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APELLIDO_PATERNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APELLIDO_MATERNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_EMPLEADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_INGRESO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO_CIVIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEXO_EMPLEADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRADO_INST: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROFESION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DOCUM_IDENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'per',
    schema: 'dbo',
    timestamps: false
  });
};
