const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPERS_ESTR_PLAN', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_CALC: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TMESTR_PLAN',
        key: 'ID_ESTR_PLAN'
      }
    },
    IN_MES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MO_VALO: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TCPERS_ESTR_PLAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P_Personal_EstructuraPlanilla",
        unique: true,
        fields: [
          { name: "ID_PERS" },
          { name: "ID_CALC" },
        ]
      },
    ]
  });
};
