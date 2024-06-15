const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_TRANS_PEDIDO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
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
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NOM_EJECUTORA: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    MES_PECOSA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
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
    TAREA_TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TAREA_NOMBRE: {
      type: DataTypes.STRING(150),
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
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    GRUPO_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    FAMILIA_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ITEM_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    FECHA_PECOSA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CANTIDAD_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    PRECIO_UNITARIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_TOTAL: {
      type: DataTypes.DECIMAL(16,6),
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
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ubigeo: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_TRANS_PEDIDO',
    schema: 'dbo',
    timestamps: false
  });
};
