const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATALOGO_BIEN_SERV_ORIGINAL', {
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_ITEM: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FACTOR_UNIDAD: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRESENTACION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COND_ALMAC: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    MARCA_REF: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRECIO_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ITEM_CRITICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ITEM: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRECIO_DOLAR: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    STOCK_MINIMO: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    STOCK_MAXIMO: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BOLSA_PRODUCTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_VISUALIZA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ENVIADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLAG_UNIDADES: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SUBASTA_INVERSA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MARCO_PRECIO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    FLAG_ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN_PADRE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN_PADRE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN_PADRE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN_PADRE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CODIGO_ONU: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CODIGO_OSCE: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    FLAG_MEJORA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_AGRUPADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ALIAS1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ALIAS2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ALIAS3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TIPO_UNIDAD: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IND_COMPONENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_UNIDAD_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_INACTIVACION: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CATALOGO_BIEN_SERV_ORIGINAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IDX_NOM_ITEM",
        fields: [
          { name: "NOMBRE_ITEM" },
        ]
      },
      {
        name: "IND_CATA_BIEN_SERV_ORIG_O2",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN_PADRE" },
          { name: "CLASE_BIEN_PADRE" },
          { name: "FAMILIA_BIEN_PADRE" },
          { name: "ITEM_BIEN_PADRE" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_ORIGINAL_06",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "NOMBRE_ITEM" },
          { name: "FECHA_ALTA" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "ind_catalogo_bien_serv_ori_05",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "ind_catalogo_bien_serv_original_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
        ]
      },
      {
        name: "PK_CATALOGO_BIEN_SERV_ORIGINAL",
        unique: true,
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
    ]
  });
};
