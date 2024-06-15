const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROYECTO_PNUD', {
    PROYECTO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROYECTO_PNUD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PROYECTO_PNUD",
        unique: true,
        fields: [
          { name: "PROYECTO" },
        ]
      },
    ]
  });
};
