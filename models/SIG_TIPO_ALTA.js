const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_ALTA', {
    CODIGO_ALTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_ALTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_ALTA",
        unique: true,
        fields: [
          { name: "CODIGO_ALTA" },
        ]
      },
    ]
  });
};
