const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLANTILLA', {
    ESPEC_TECNICA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PLANTILLA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TITULO_ESPECIF: {
      type: DataTypes.STRING(80),
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
    tableName: 'SIG_PLANTILLA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PLANTILLA",
        unique: true,
        fields: [
          { name: "ESPEC_TECNICA" },
          { name: "TIPO_PLANTILLA" },
        ]
      },
    ]
  });
};
