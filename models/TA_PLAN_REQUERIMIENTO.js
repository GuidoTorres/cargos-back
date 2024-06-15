const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_PLAN_REQUERIMIENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    C_SEC_EJEC: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NRO_FASE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    PROG_ESTRATEGICO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    C_FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    C_SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    C_EESS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    C_ESTABLEC: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    C_CATEGORIA_EESS: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    D_CATEGORIA_EESS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    META_FISICA: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    C_CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    C_TIPO_ITEM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_BIEN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PREC_UNITARIO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANT_COMPRA: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    PREC_COMPRA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    PRECIO_MAXIMO: {
      type: DataTypes.DECIMAL(19,9),
      allowNull: true
    },
    PRECIO_MINIMO: {
      type: DataTypes.DECIMAL(19,9),
      allowNull: true
    },
    PRECIO_PROMEDIO: {
      type: DataTypes.DECIMAL(38,9),
      allowNull: true
    },
    PRECIO_DESV_EST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    C_EspecificaDet: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    C_FUENTE_FINANC: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    TIPO_COSTO_T4: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    TIPO_COSTO_T3: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
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
    CAT_REQ_UM_USO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CAT_REQ_UM_LOG: {
      type: DataTypes.DECIMAL(16,10),
      allowNull: true
    },
    CANT_COMPRA_CALCULADO: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    PREC_COMPRA_CALCULADO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_PLAN_REQUERIMIENTO',
    schema: 'dbo',
    timestamps: false
  });
};
