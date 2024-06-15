const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_maestro_det_cadena', {
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
    valor_numerico: {
      type: DataTypes.DECIMAL(16,6),
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
    tableName: 'sig_maestro_det_cadena',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_MAESTRO_DET_CADENA",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "cod_detalle" },
        ]
      },
      {
        name: "ind_sig_maestro_det_cad_01",
        fields: [
          { name: "cod_maestro" },
        ]
      },
      {
        name: "pk_sig_maestro_det_cadena",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "cod_detalle" },
        ]
      },
    ]
  });
};
