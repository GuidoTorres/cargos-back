const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INTF_NOT', {
    SECUENCIAL: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      primaryKey: true
    },
    CORRELATIV: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    NOTA: {
      type: DataTypes.CHAR(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INTF_NOT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INTF_NOT",
        unique: true,
        fields: [
          { name: "SECUENCIAL" },
          { name: "CORRELATIV" },
        ]
      },
    ]
  });
};
