const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_TRANSMISION', {
    CODIGO_TABLA: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_TABLA: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ORIGEN_TRANSMISION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    OPCION_TRANSMISION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ORDEN_TRANSMISION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_TRANSMISION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SITRANS",
        unique: true,
        fields: [
          { name: "CODIGO_TABLA" },
        ]
      },
    ]
  });
};
