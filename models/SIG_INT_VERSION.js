const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_VERSION', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CORREL: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true
    },
    VERSION: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    HORA: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_VERSION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INT_VERSION",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "CORREL" },
        ]
      },
    ]
  });
};
