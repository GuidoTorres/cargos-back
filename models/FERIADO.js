const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FERIADO', {
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'FERIADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FERIADO",
        unique: true,
        fields: [
          { name: "FECHA" },
        ]
      },
    ]
  });
};
