const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ppr_ups_sbas', {
    cod_servicio: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    desc_servicio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_ppr_ups_sbas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_ppr___9BF23A4919B129F9",
        unique: true,
        fields: [
          { name: "cod_servicio" },
        ]
      },
    ]
  });
};
