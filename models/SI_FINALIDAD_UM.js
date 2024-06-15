const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_FINALIDAD_UM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    finalidad: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_FINALIDAD_UM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FINALIDAD_UM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "finalidad" },
        ]
      },
    ]
  });
};
