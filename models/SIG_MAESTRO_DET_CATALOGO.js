const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MAESTRO_DET_CATALOGO', {
    COD_MAESTRO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SEC_MAESTRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MAESTRO_DET_CATALOGO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MAESTRO_DET_CATALOGO",
        unique: true,
        fields: [
          { name: "COD_MAESTRO" },
          { name: "SEC_MAESTRO" },
        ]
      },
    ]
  });
};
