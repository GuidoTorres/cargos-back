const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_TARIFARIO_CAJA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_TARIFARIO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVILIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_TARIFARIO_CAJA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_TARIFARIO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_TARIFARIO" },
          { name: "SEC_CAJA" },
        ]
      },
    ]
  });
};
