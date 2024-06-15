const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_PROGRAMA_NOMBRE_FASE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
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
    tableName: 'TMP_PROGRAMA_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_PROGRAMA_NOMBRE_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "PROGRAMA" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
