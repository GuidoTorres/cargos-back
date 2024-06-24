const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMUSUA', {
    ID_USUA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NO_USUA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    NO_CLAV: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ST_ACTI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DE_USUA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMUSUA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "XPKTMUSUA",
        unique: true,
        fields: [
          { name: "ID_USUA" },
        ]
      },
    ]
  });
};

