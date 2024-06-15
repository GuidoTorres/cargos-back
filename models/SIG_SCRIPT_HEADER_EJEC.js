const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SCRIPT_HEADER_EJEC', {
    SQL_COD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_EJEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BASEDATO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ERROR_DESC: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    APLICATIVO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SQL_ERROR: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    VERSION_BD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SCRIPT_HEADER_EJEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SCRIPT_HEADER_EJEC",
        unique: true,
        fields: [
          { name: "SQL_COD" },
        ]
      },
    ]
  });
};
