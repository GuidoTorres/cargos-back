const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_TRANS_ORDEN', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
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
    NOM_EJECUTORA: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    MES_ORDEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    FECHA_ORDEN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_PROC_SEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROVEEDOR_NRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    D_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    GRUPO_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FAMILIA_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CANTIDAD_ITEM: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_UNITARIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    MONTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    UNIDAD_MEDIDA_ORDEN: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PLAZO_ENTREGA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FECHA_INTERNAMIENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CATEGORIA_PPTO: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PROGRAMA_NOMBRE: {
      type: DataTypes.STRING(257),
      allowNull: true
    },
    PRODUCTO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    PRODUCTO_NOMBRE: {
      type: DataTypes.STRING(260),
      allowNull: true
    },
    SUBPRODUCTO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SUBPRODUCTO_NOMBRE: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    FUENTE_FINANCIAMIENTO: {
      type: DataTypes.STRING(37),
      allowNull: true
    },
    GENERICA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NOM_GENERICA: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    SUB_GENERICA1: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NOM_SUB_GENERICA1: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    SUB_GENERICA2: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NOM_SUB_GENERICA2: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    ESPECIFICA1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NOM_ESPECIFICA1: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    ESPECIFICA2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOM_ESPECIFICA2: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    NOM_CENTRO_COSTO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    PTO_ATEN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PTO_ATEN_NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PTO_ATEN_CATEGORIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_TRANS_ORDEN',
    schema: 'dbo',
    timestamps: false
  });
};
