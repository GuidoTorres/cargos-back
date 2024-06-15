const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRUPO_CIIU', {
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CATEGORIA_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    CATEGORIA_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CATEGORIA_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    GRUPO_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRUPO_CIIU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GRUPO_CIIU",
        unique: true,
        fields: [
          { name: "TIPO_CIIU" },
          { name: "CATEGORIA_CIIU" },
          { name: "GRUPO_CIIU" },
        ]
      },
    ]
  });
};
