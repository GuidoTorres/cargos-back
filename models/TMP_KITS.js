const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_KITS', {
    ano_eje: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true
    },
    sub_finalidad: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    sec_kit: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_costo_di: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_costo_fv: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    codigo_bien: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    agrupa_item: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    cantidad_vez: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    nro_veces: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    cantidad_caso: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    porcent_uso: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    factor_convers: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    factor_merma: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    tipo_calculo: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_i_1: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_i_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_i_3: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_i_4: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_ii_1: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_ii_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_iii_1: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_iii_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_eess_movil: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_disa: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_red: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_mred: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    categ_minsa: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    flag_activo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cadena_funcional: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    seleccionado: {
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
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CATEG_14: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CATEG_15: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CATEG_16: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CATEG_17: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CATEG_18: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_KITS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_TMP_KITS_01",
        fields: [
          { name: "tipo_bien" },
          { name: "codigo_bien" },
        ]
      },
      {
        name: "IND_TMP_KITS_03",
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "item_bien" },
        ]
      },
      {
        name: "PK_TMP_KITS",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_kit" },
        ]
      },
    ]
  });
};
