const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PERSONAL_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SITUACION_LABORAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REGIMEN_LABORAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CONDICION_LABORAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_INGRESO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CESE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GRUPO_OCUPACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CATEGORIA_OCUPACIONAL: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PERSONAL_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PERSONAL_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
    ]
  });
};
