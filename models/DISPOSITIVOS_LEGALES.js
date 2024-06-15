const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DISPOSITIVOS_LEGALES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    DISPOSITIVO_LEGAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NORMA_REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COD_REFERENCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DISPOSITIVOS_LEGALES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DISPOSITIVOS_LEGALES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "DISPOSITIVO_LEGAL" },
        ]
      },
    ]
  });
};
