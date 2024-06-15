const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_categorias', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sub_finalidad: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    id_sec: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    categoria: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    flag_uso: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_categorias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_CATEGORIAS",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sub_finalidad" },
          { name: "id_sec" },
          { name: "categoria" },
        ]
      },
    ]
  });
};
