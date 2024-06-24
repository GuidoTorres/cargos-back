const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMACCE_LOG', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CO_USER: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IP_DIRE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DE_HOST_NAME: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AU_FECH: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMACCE_LOG',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TMACCE_L__3214EC271F834EC0",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
