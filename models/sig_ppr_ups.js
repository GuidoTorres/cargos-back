const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ppr_ups', {
    SecUPs: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    cod_ups: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cod_servicio: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'sig_ppr_ups_sbas',
        key: 'cod_servicio'
      }
    },
    cod_especialidad: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sub_especialidad: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'sig_ppr_espserv',
        key: 'sub_especialidad'
      }
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_ppr_ups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_ppr___A541E5412CC3FE6D",
        unique: true,
        fields: [
          { name: "SecUPs" },
        ]
      },
    ]
  });
};
