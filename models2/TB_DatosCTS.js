const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_DatosCTS', {
    PersCodigo: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    'Años': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FechaReingreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nuevo: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_DatosCTS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_DatosCTS2",
        unique: true,
        fields: [
          { name: "PersCodigo" },
        ]
      },
    ]
  });
};
