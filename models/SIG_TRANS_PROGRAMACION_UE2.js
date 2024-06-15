const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TRANS_PROGRAMACION_UE2', {
    ano_eje: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    fase_cuadro: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    FASE: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NOM_SECTOR: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    NOM_PLIEGO: {
      type: DataTypes.STRING(156),
      allowNull: true
    },
    EJECUTORA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    NOM_EJECUTORA: {
      type: DataTypes.STRING(183),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOM_CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PTO_ATEN_NOMBRE: {
      type: DataTypes.STRING(233),
      allowNull: true
    },
    DESC_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PTO_ATEN: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    PTO_ATEN_CATEGORIA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    nom_categoria: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PTO_ATEN_COD_RENAES: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    TIPO_PTO_ATEN: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UBIGEO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PTO_ATEN_DISA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PTO_ATEN_RED: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PTO_ATEN_MICRORED: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nombre_DPTO_PTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nombre_PROV_PTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nombre_DIST_PTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PTO_ATEN_INSTITUCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado_pto: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    NOM_PTO_ATEN_ESTADO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CATEG_PPTAL: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    META_PROG_PPTO: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    META_PRODUCTO: {
      type: DataTypes.STRING(275),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    SUB_PRODUCTO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    NOM_SUB_PRODUCTO: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    TRAZADOR: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    META_FISICA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    tipo_uso: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_USO_DES: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GENERICA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NOM_GENERICA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SUB_GENERICA1: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NOM_SUB_GENERICA1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SUB_GENERICA2: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NOM_SUB_GENERICA2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESPECIFICA1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NOM_ESPECIFICA1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESPECIFICA2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOM_ESPECIFICA2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Fuente_Financ: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NOM_Fuente_Financ: {
      type: DataTypes.STRING(37),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN_C: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CLASE_BIEN_C: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FAMILIA_BIEN_C: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ITEM_BIEN_C: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NOM_ITEM_BIEN: {
      type: DataTypes.STRING(150),
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
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    NOM_unidad_medida: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    TIPO_COSTO_DI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COSTO_FV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_ESTRATEGICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_kit: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    NIVEL_ID: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROG_RECTOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_PRODUCTO_UM: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TRANS_PROGRAMACION_UE2',
    schema: 'dbo',
    timestamps: false
  });
};
