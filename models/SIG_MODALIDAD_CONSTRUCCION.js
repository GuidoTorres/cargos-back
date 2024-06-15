const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MODALIDAD_CONSTRUCCION', {
    COD_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MODALIDAD_CONSTRUCCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MODALIDAD_CONSTRUC",
        unique: true,
        fields: [
          { name: "COD_MODALIDAD" },
        ]
      },
    ]
  });
};
