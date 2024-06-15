const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_FUNCION_FASE', {
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
    FUNCION: {
      type: DataTypes.STRING(2),
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
    tableName: 'TMP_FUNCION_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_FUNCION_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FUNCION" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
