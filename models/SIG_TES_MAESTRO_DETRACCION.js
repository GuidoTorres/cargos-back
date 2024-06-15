const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_MAESTRO_DETRACCION', {
    codigo_bs: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nom_bs: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    porcentaje: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_MAESTRO_DETRACCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_MAESTRO_DETRACCION",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "codigo_bs" },
        ]
      },
    ]
  });
};
