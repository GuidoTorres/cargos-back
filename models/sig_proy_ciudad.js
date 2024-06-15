const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_ciudad', {
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    CIUDAD: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_ciudad',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_ciudad__12356159",
        unique: true,
        fields: [
          { name: "PAIS" },
          { name: "CIUDAD" },
        ]
      },
    ]
  });
};
