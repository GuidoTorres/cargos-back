const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_carga_kit', {
    sec_kit: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true
    },
    sub_finalidad: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    tipo_costo_di: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_costo_fv: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_costo_dik: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    item_bien: {
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
    um_uso: {
      type: DataTypes.STRING(50),
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
    flag_i_1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_i_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_i_2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_i_3: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_i_3: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_i_4: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_i_4: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_ii_1: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_ii_1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_ii_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_ii_2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_iii_1: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_iii_1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_iii_2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_iii_2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_eess_movil: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_eess_movil: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_disa: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_disa: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_red: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_red: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_mred: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_mred: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_minsa: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_minsa: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_14: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_14: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_15: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_15: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    categ_16: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_16: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
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
    item: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    prog_rector: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    compl_sustit: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    componente: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nivel: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    version: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    F_GENERACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    S_CRITICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    S_TIPO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    S_FINANCIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    S_CLASIFICA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    categ_99: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    flag_99: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ANNO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_carga_kit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_TMP_CARGA01",
        fields: [
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "item" },
          { name: "tipo_bien" },
        ]
      },
      {
        name: "IND_TMP_CARGA02",
        fields: [
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "item" },
          { name: "tipo_bien" },
          { name: "clasificador" },
        ]
      },
      {
        name: "IND_TMP_CARGA03",
        fields: [
          { name: "sub_finalidad" },
        ]
      },
      {
        name: "PK_sec_kit",
        unique: true,
        fields: [
          { name: "sec_kit" },
          { name: "sub_finalidad" },
        ]
      },
    ]
  });
};
