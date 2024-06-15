const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CAUSAL_ALTA', {
    CODIGO_ALTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_CAUSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CAUSAL_ALTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CAUSAL_ALTA",
        unique: true,
        fields: [
          { name: "CODIGO_ALTA" },
        ]
      },
    ]
  });
};
