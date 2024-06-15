const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_DOCUMENTO', {
    TIPO_DOCUMENTO: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ES_MCPP: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TIPO_DOCUMENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIPO_DOCUMENTO",
        unique: true,
        fields: [
          { name: "TIPO_DOCUMENTO" },
        ]
      },
    ]
  });
};
