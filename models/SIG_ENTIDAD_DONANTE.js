const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENTIDAD_DONANTE', {
    TIPO_ENTIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    COD_ENTIDAD: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_ENTIDAD_DONANTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ENTIDAD_DONANTE",
        unique: true,
        fields: [
          { name: "TIPO_ENTIDAD" },
          { name: "COD_ENTIDAD" },
        ]
      },
    ]
  });
};
