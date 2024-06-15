const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_COLORES', {
    CODIGO_COLOR: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_COLORES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_COLORES",
        unique: true,
        fields: [
          { name: "CODIGO_COLOR" },
        ]
      },
    ]
  });
};
