const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SUB_PROGRAMA_NOMBRE_FASE', {
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
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
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
    tableName: 'TMP_SUB_PROGRAMA_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_SUB_PROGRAMA_NOMBRE_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_PROGRAMA" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
