const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPERS_LIQU', {
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
    MO_CALC: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TCPERS_LIQU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P_Pers_EsPl_Liquidaciones",
        unique: true,
        fields: [
          { name: "ID_PERS" },
          { name: "ID_CALC" },
        ]
      },
    ]
  });
};
