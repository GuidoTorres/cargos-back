const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MODULO_PROCESO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CMENU_ID: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CPROCESO_ID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    CDESCRIPCION: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    CLAVE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CFECHA_REG: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CUSER_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CEQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CFECHA_ACT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CUSER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CEQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MODULO_PROCESO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MODULO_PROCESO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "CMENU_ID" },
          { name: "CPROCESO_ID" },
        ]
      },
    ]
  });
};
