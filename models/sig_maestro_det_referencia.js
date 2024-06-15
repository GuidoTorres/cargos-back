const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_maestro_det_referencia', {
    cod_maestro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_maestro',
        key: 'cod_maestro'
      }
    },
    cod_detalle: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    abreviatura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_maestro_det_referencia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_maestro_det_referencia",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "cod_detalle" },
        ]
      },
    ]
  });
};
