const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_MICRORED', {
    COD_DISA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    COD_RED: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    COD_MICRORED: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    DESC_MICRORED: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REF: {
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
    tableName: 'SIG_PPR_MICRORED',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_MICRORED",
        unique: true,
        fields: [
          { name: "COD_DISA" },
          { name: "COD_RED" },
          { name: "COD_MICRORED" },
        ]
      },
    ]
  });
};
