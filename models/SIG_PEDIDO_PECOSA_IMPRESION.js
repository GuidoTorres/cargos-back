const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEDIDO_PECOSA_IMPRESION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
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
    DESC_BIEN: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CANTIDAD_TOTAL: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    DESC_UNIDAD: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    NRO_LOTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_EXPIRACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DESC_MARCA: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CANTIDAD_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    PREC_UNITARIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_IMP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CORRELATIVO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ITEM_BIEN_DET: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    secuencia_temp: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PEDIDO_PECOSA_IMPRESION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PEDIDO_PECOSA_IMPRESION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "NRO_PECOSA" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "SECUENCIA" },
          { name: "SEC_DETALLE" },
        ]
      },
    ]
  });
};
