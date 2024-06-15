const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DIVISION', {
    COD_DIV: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    DIVISION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
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
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DIVISION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DIVISION",
        unique: true,
        fields: [
          { name: "COD_DIV" },
        ]
      },
    ]
  });
};
