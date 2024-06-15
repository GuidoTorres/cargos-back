const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ESPECIF_TECNICA_ACTIVO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    ESPEC_TECNICA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODIGO_COLOR: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_PLANTILLA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_INCORP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ESPECIF_TECNICA_ACTIVO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ESPECIF_ACT",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "ESPEC_TECNICA" },
        ]
      },
    ]
  });
};
