const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_valida_techo', {
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
    origen: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
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
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    porc_techo: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    ppto_progra: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ppto_aprob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ppto_asignado: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ppto_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_progra: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_asig: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_aprob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    indicador: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    paac_inicial: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    paac_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    porc_asig: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    flag_impresion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_valida_techo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_valida_techo",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "origen" },
          { name: "fuente_financ" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
