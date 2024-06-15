const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEI_GENERAL', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    PERIODO_INI: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    PERIODO_FIN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    MISION: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ETAPA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DOC_APRUEBA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_DOC_APRUEBA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UBI_NOM_ARCHIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    VIGENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PEI_GENERAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PEI_GENERAL",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
