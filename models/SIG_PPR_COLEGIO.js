const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_COLEGIO', {
    ID_DRE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ID_UGEL: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    COD_COLEGIO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    DESC_COLEGIO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_COLEGIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_COLEGIO",
        unique: true,
        fields: [
          { name: "ID_DRE" },
          { name: "ID_UGEL" },
          { name: "COD_COLEGIO" },
        ]
      },
    ]
  });
};
