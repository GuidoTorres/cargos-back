const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_ESTADO', {
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_ESTADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_ESTADO",
        unique: true,
        fields: [
          { name: "ESTADO_CONSERV" },
        ]
      },
    ]
  });
};
