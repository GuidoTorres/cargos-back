const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FINALIDAD_FASE', {
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
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FINALIDAD_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FINALIDAD_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "FINALIDAD" },
        ]
      },
    ]
  });
};
