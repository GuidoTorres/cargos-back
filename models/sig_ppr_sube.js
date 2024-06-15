const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ppr_sube', {
    cod_especialidad: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    desc_especialidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_ppr_sube',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_ppr___1227EAC41D81BADD",
        unique: true,
        fields: [
          { name: "cod_especialidad" },
        ]
      },
    ]
  });
};
