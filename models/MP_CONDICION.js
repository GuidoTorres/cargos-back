const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_CONDICION', {
    CONDICION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_CONDICION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_CONDICION",
        unique: true,
        fields: [
          { name: "CONDICION" },
        ]
      },
    ]
  });
};
