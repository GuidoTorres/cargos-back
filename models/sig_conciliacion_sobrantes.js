const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_conciliacion_sobrantes', {
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
    tipo_movimto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    nro_movimto: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_modalidad: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
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
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_conciliacion_sobrantes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_conc_sobrantes",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "mes_proceso" },
          { name: "tipo_movimto" },
          { name: "nro_movimto" },
          { name: "tipo_modalidad" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
