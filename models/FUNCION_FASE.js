const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FUNCION_FASE', {
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
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FUNCION_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FUNCION_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "FUNCION" },
        ]
      },
    ]
  });
};
