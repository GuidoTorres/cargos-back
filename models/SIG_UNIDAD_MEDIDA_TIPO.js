const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_UNIDAD_MEDIDA_TIPO', {
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TIPO_UM_NOMBRE: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    TIPO_UNIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FLAG_DEFAULT: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    FLAG_CATALOGO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'SIG_UNIDAD_MEDIDA_TIPO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UM_TIPO",
        unique: true,
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
