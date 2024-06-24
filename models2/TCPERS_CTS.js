const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPERS_CTS', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_CALC: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    MO_VALO: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TCPERS_CTS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P_Pers_EsPl_CTS",
        unique: true,
        fields: [
          { name: "ID_PERS" },
          { name: "ID_CALC" },
        ]
      },
    ]
  });
};
