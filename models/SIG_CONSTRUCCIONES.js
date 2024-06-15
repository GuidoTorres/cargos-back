const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONSTRUCCIONES', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    COD_CONSTRUC: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_CONSTRUC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_CONSTRUC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_CONSTRUC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UBICACION: {
      type: DataTypes.STRING(150),
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
    ESTADO: {
      type: DataTypes.STRING(1),
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
    tableName: 'SIG_CONSTRUCCIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONSTRUC",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CONSTRUC" },
        ]
      },
    ]
  });
};
