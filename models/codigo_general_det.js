const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigo_general_det', {
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'codigo_general',
        key: 'codigo'
      }
    },
    codigo_det: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    descripcion_abreviada: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'codigo_general_det',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_cod_general_det_01",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "IND_PK_CODIGO_GENERAL_DET",
        unique: true,
        fields: [
          { name: "codigo" },
          { name: "codigo_det" },
        ]
      },
      {
        name: "pk_codigo_general_det",
        unique: true,
        fields: [
          { name: "codigo" },
          { name: "codigo_det" },
        ]
      },
    ]
  });
};
