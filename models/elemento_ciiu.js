const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elemento_ciiu', {
    tipo_ciiu: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    categoria_ciiu: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    grupo_ciiu: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    elemento_ciiu: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elemento_ciiu',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ELEMENTO_CIIU",
        unique: true,
        fields: [
          { name: "tipo_ciiu" },
          { name: "categoria_ciiu" },
          { name: "grupo_ciiu" },
          { name: "elemento_ciiu" },
        ]
      },
    ]
  });
};
