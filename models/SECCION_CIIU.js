const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SECCION_CIIU', {
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
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
    tableName: 'SECCION_CIIU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SECCION_CIIU",
        unique: true,
        fields: [
          { name: "TIPO_CIIU" },
        ]
      },
    ]
  });
};
