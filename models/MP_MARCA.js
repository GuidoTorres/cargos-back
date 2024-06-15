const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_MARCA', {
    MARCA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_MARCA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_MARCA",
        unique: true,
        fields: [
          { name: "MARCA" },
        ]
      },
    ]
  });
};
