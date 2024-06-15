const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATEGORIA_CIIU', {
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SECCION_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    CATEGORIA_CIIU: {
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
    tableName: 'CATEGORIA_CIIU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CATEGORIA_CIIU",
        unique: true,
        fields: [
          { name: "TIPO_CIIU" },
          { name: "CATEGORIA_CIIU" },
        ]
      },
    ]
  });
};
