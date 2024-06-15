const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tipo_bienes', {
    bien_activo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    tipo_bien: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tipo_bienes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_TIPO_BIENES",
        unique: true,
        fields: [
          { name: "bien_activo" },
          { name: "tipo_bien" },
        ]
      },
      {
        name: "pk_sig_tipo_bienes",
        unique: true,
        fields: [
          { name: "bien_activo" },
          { name: "tipo_bien" },
        ]
      },
    ]
  });
};
