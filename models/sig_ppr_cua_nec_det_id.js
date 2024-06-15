const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ppr_cua_nec_det_id', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fase_cuadro: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    item_sec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    id_kit: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    tipo_calculo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cantidad_unitaria: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cant_total: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_ppr_cua_nec_det_id',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_ppr_cua_nec___0209E688",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "secuencia" },
          { name: "fase_cuadro" },
          { name: "item_id" },
        ]
      },
    ]
  });
};
