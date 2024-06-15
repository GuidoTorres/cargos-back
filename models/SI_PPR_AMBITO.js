const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_AMBITO', {
    ID_AMBITO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PPR_AMBITO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AMBITO",
        unique: true,
        fields: [
          { name: "ID_AMBITO" },
        ]
      },
    ]
  });
};
