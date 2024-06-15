const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Origen', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    origen: {
      type: DataTypes.STRING(1),
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
    tableName: 'Origen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ORIGEN",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "origen" },
        ]
      },
    ]
  });
};
