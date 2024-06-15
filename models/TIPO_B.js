const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_B', {
    CODIGO_B: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TIPO_B',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIPO_B",
        unique: true,
        fields: [
          { name: "CODIGO_B" },
        ]
      },
    ]
  });
};
