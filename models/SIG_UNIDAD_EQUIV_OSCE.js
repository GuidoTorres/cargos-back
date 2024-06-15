const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_UNIDAD_EQUIV_OSCE', {
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_OSCE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_UNIDAD_EQUIV_OSCE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_UNIDAD_EQUIV",
        unique: true,
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
