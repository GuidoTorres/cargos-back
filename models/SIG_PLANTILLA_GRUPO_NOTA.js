const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLANTILLA_GRUPO_NOTA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GRUPO_NOTA',
        key: 'SEC_GRUPO'
      }
    },
    SEC_PLANTILLA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TITULO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FLAG_NOTA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PLANTILLA_GRUPO_NOTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PLANTILLA_GRUPO_NOTA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_GRUPO" },
          { name: "SEC_PLANTILLA" },
        ]
      },
    ]
  });
};
