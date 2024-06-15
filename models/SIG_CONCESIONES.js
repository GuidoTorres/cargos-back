const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCESIONES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CONCESION: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONCESIONARIA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONCESIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONCESIONES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CONCESION" },
          { name: "MES_PROCESO" },
        ]
      },
    ]
  });
};
