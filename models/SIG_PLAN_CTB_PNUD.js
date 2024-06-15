const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLAN_CTB_PNUD', {
    CUENTA: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PLAN_CTB_PNUD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PLAN_CTB_PNUD",
        unique: true,
        fields: [
          { name: "CUENTA" },
        ]
      },
    ]
  });
};
