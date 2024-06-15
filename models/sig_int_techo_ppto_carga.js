const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_int_techo_ppto_carga', {
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
    subfase: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    correl_envio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha_envio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fuente: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fuente_financ_agregada: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    generic_categ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    generic_grupo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    programa_ppto: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    categoria_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ppto_siaf: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ppto_reser: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ppto_siga: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_int_techo_ppto_carga',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_int_techo_ppto_carga",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "subfase" },
          { name: "correl_envio" },
        ]
      },
    ]
  });
};
