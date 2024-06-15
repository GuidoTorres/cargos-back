const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FUENTE_FINANC_AGREGADA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FUENTE_FINANC_AGREGADA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FUENTE_FINANC_AGREGADA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FUENTE_FINANC_AGREGADA" },
        ]
      },
    ]
  });
};
