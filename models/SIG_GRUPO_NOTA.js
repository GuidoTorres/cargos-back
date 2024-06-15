const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_GRUPO_NOTA', {
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_GRUPO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_GRUPO_NOTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GRUPO_NOTA",
        unique: true,
        fields: [
          { name: "SEC_GRUPO" },
        ]
      },
    ]
  });
};
