const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_int_consolidado', {
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
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fuente: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nombre_fuente: {
      type: DataTypes.STRING(150),
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
    nombre_generic: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre_aproy: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nombre_meta: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nombre_especif: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GENERICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUB_GENERICA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_GENERICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPECIFICA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPECIFICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    monto_techo: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_cn: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monto_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_int_consolidado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_int_consolidado",
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
