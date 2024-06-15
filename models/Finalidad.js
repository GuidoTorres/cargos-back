const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Finalidad', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    finalidad: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Finalidad',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Finalidad",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "finalidad" },
        ]
      },
    ]
  });
};
