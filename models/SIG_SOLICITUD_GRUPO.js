const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SOLICITUD_GRUPO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_SOL_GRU: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SOLICITUD_GRUPO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SOLI_GRUPO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "SEC_SOL_GRU" },
        ]
      },
    ]
  });
};
