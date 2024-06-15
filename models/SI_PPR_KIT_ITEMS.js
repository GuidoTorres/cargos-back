const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_KIT_ITEMS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    TIPO_COSTO_DI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COSTO_FV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COSTO_DIK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AGRUPA_ITEM: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    UM_USO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANTIDAD_VEZ: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    NRO_VECES: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANTIDAD_CASO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PORCENT_USO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FACTOR_CONVERS: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FACTOR_MERMA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CATEG_I_1: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_I_1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_I_2: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_I_2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_I_3: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_I_3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_I_4: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_I_4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_II_1: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_II_1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_II_2: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_II_2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_III_1: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_III_1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_III_2: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_III_2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_EESS_MOVIL: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_EESS_MOVIL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_DISA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_DISA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_RED: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_RED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_MRED: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_MRED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_MINSA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_MINSA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_14: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_15: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_16: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    prog_rector: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    compl_sustit: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATEG_17: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    CATEG_18: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_18: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    tipo_costo_t4: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    tipo_costo_t3: {
      type: DataTypes.CHAR(16),
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
    }
  }, {
    sequelize,
    tableName: 'SI_PPR_KIT_ITEMS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SI_PPR_KIT_ITEMS",
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM" },
        ]
      },
      {
        name: "IND_SI_PPR_KIT_ITEMS_02",
        fields: [
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "IND_SI_PPR_KIT_ITEMS_05",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "IND_SI_PPR_KIT_ITEMS_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_KIT" },
          { name: "ID_SUB_FINALIDAD" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
        ]
      },
      {
        name: "IND_SI_PPR_KIT_ITEMS01",
        fields: [
          { name: "ANO_EJE" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "PK_KIT_ITEMS_BASE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_KIT" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
