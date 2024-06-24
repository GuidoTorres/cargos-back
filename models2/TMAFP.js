const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMAFP', {
    ID_AFP: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_AFP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MO_AOB: {
      type: DataTypes.DECIMAL(4,4),
      allowNull: true
    },
    MO_SEGU: {
      type: DataTypes.DECIMAL(4,4),
      allowNull: true
    },
    MO_COMI: {
      type: DataTypes.DECIMAL(4,4),
      allowNull: true
    },
    MO_TOTA: {
      type: DataTypes.DECIMAL(4,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMAFP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_AFP",
        unique: true,
        fields: [
          { name: "ID_AFP" },
        ]
      },
    ]
  });
};
