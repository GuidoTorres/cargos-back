const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_planilla_concepto_clasif', {
    cod_concepto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    COLUM_CLASIFICADOR: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_planilla_concepto_clasif',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_planilla_concepto_clasif",
        unique: true,
        fields: [
          { name: "cod_concepto" },
          { name: "clasificador" },
        ]
      },
    ]
  });
};
