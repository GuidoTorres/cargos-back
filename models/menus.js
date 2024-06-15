const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menus', {
    cmenu_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    cmenuname: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_menus",
        unique: true,
        fields: [
          { name: "cmenu_id" },
        ]
      },
      {
        name: "pk_menus",
        unique: true,
        fields: [
          { name: "cmenu_id" },
        ]
      },
    ]
  });
};
