const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sub_Programa_Nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
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
    tableName: 'Sub_Programa_Nombre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SUB_PROGRAMA_NOMBRE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sub_programa" },
        ]
      },
    ]
  });
};
