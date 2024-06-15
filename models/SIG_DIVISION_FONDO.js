const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DIVISION_FONDO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    COD_FONDO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    COD_DIV: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DIVISION',
        key: 'COD_DIV'
      }
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
    tableName: 'SIG_DIVISION_FONDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DIVISION_FONDO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_FONDO" },
          { name: "COD_DIV" },
        ]
      },
    ]
  });
};
