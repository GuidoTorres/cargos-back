const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACT_PROY_NOMBRE_FASE', {
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
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ACT_PROY_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACT_PROY_NOMBRE_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "ACT_PROY" },
        ]
      },
    ]
  });
};
