const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Maestro_Documento', {
    cod_doc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_SERIE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_rend_docu: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_TIPO_RPV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_caja: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'Maestro_Documento',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MAESTRO_DOCUMENTO",
        unique: true,
        fields: [
          { name: "cod_doc" },
        ]
      },
    ]
  });
};
