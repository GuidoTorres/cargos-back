const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SCRIPT_DETAIL_EJEC', {
    SQL_COD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SQL_SEC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SQL_DESC: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_SCRIPT_DETAIL_EJEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SCRIPT_DETAIL_EJEC",
        unique: true,
        fields: [
          { name: "SQL_COD" },
          { name: "SQL_SEC" },
        ]
      },
    ]
  });
};
