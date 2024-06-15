const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Banco', {
    banco: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Banco',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BANCO",
        unique: true,
        fields: [
          { name: "banco" },
        ]
      },
    ]
  });
};
