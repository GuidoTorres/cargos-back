const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_PRESENTACION', {
    CODIGO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    UNIDAD_USO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FACTOR: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CATALOGO_PRESENTACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CATALOGO_PRESENTACION",
        unique: true,
        fields: [
          { name: "CODIGO" },
        ]
      },
    ]
  });
};
