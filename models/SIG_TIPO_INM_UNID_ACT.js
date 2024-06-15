const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_INM_UNID_ACT', {
    CODIGO_TIPO_INM: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_INMUEBLE',
        key: 'CODIGO_TIPO_INM'
      }
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_UNIDAD_ACTIVO',
        key: 'CODIGO_TIPO_UA'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_INM_UNID_ACT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_TIPO_INMUEBLE",
        fields: [
          { name: "CODIGO_TIPO_INM" },
        ]
      },
      {
        name: "IND_SIG_TIPO_UNIDAD_ACTIVO",
        fields: [
          { name: "CODIGO_TIPO_UA" },
        ]
      },
      {
        name: "PK_SIG_TIPO_INM_UNID_ACT",
        unique: true,
        fields: [
          { name: "CODIGO_TIPO_INM" },
          { name: "CODIGO_TIPO_UA" },
        ]
      },
    ]
  });
};
