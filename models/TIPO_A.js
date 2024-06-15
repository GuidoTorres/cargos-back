const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_A', {
    CODIGO_A: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TIPO_A',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIPO_A",
        unique: true,
        fields: [
          { name: "CODIGO_A" },
        ]
      },
    ]
  });
};
