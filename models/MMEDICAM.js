const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MMEDICAM', {
    MEDCOD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    MEDNOM: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MEDPRES: {
      type: DataTypes.STRING(78),
      allowNull: true
    },
    MEDCNC: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    MEDFF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MEDTIP: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MMEDICAM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MMEDICAM",
        unique: true,
        fields: [
          { name: "MEDCOD" },
        ]
      },
    ]
  });
};
