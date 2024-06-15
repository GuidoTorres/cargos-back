const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_KIT_ITEMS_BK', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    TIPO_COSTO_DI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_COSTO_FV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_COSTO_DIK: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
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
      type: DataTypes.DECIMAL(12,6),
      allowNull: true
    },
    NRO_VECES: {
      type: DataTypes.DECIMAL(12,6),
      allowNull: true
    },
    CANTIDAD_CASO: {
      type: DataTypes.DECIMAL(12,6),
      allowNull: true
    },
    PORCENT_USO: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FACTOR_CONVERS: {
      type: DataTypes.DECIMAL(12,6),
      allowNull: true
    },
    FACTOR_MERMA: {
      type: DataTypes.DECIMAL(12,6),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CATEG_I_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_I_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_I_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_I_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_I_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_I_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_I_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_I_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_II_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_II_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_II_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_II_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_III_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_III_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_III_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_III_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_EESS_MOVIL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_EESS_MOVIL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_DISA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_DISA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_RED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_RED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_MRED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_MRED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_MINSA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_MINSA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_rector: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    compl_sustit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CATEG_17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CATEG_18: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_18: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tipo_costo_t4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_costo_t3: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PPR_KIT_ITEMS_BK',
    schema: 'dbo',
    timestamps: false
  });
};
