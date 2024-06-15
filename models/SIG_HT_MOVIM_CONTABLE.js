const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_HT_MOVIM_CONTABLE', {
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
    mes_proceso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    valo_debe_aper: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    valo_habe_aper: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    valo_debe_movi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    valo_habe_movi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    depr_peri_movi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipo_reg: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_HT_MOVIM_CONTABLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_HT_CONTABLE",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "mes_proceso" },
          { name: "mayor" },
          { name: "sub_cta" },
        ]
      },
    ]
  });
};
