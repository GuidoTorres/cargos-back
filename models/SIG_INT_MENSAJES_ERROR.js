const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_MENSAJES_ERROR', {
    MENSAJE_ERROR: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FLAG_RENDICION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_ERROR: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_MENSAJES_ERROR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_INT_MENSAJES__7ABDCA7B",
        unique: true,
        fields: [
          { name: "MENSAJE_ERROR" },
        ]
      },
    ]
  });
};
