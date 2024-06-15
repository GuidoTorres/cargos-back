const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMPONENTE_NOMBRE_FASE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_COMPONENTE: {
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
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'COMPONENTE_NOMBRE_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_COMPONENTE_NOMBRE_FASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "COMPONENTE" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
