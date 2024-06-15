const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_ONU', {
    TIPO_ONU: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ONU: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_ONU: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CATALOGO_ONU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CATALOGO_ONU",
        unique: true,
        fields: [
          { name: "TIPO_ONU" },
          { name: "CODIGO_ONU" },
        ]
      },
    ]
  });
};
