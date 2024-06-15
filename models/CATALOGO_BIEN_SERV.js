const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATALOGO_BIEN_SERV', {
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
      allowNull: true
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
      allowNull: true
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
      allowNull: true
    },
    FLAG_UNIDADES: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
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
    CLASE_BIEN_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CLASE_ATRIBUTO',
        key: 'CLASE_BIEN_DET'
      }
    },
    CODIGO_ONU: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_PLAN_LOGISTICO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_PLAN_72_HORAS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PESO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VOLUMEN: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    ESTADO_MEF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_STOCK_OTAN: {
      type: DataTypes.STRING(15),
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
    IND_COMPONENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_UNIDAD_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DURADERO: {
      type: DataTypes.STRING(1),
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
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    DIAS_VENCIMIENTO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    UMEDIDA_PESO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    UMEDIDA_VOLUMEN: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CATALOGO_BIEN_SERV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IDX_NOM_ITEM_CAT",
        fields: [
          { name: "NOMBRE_ITEM" },
        ]
      },
      {
        name: "IND_CATA_BIEN_SERV_O7",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_CATALOGO_03",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "IND_CATALOGO_04",
        fields: [
          { name: "ESTADO" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_SERV_01",
        fields: [
          { name: "UNIDAD_ADQUIS" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_SERV_02",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "UNIDAD_MEDIDA" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_SERV_04",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN_PADRE" },
          { name: "CLASE_BIEN_PADRE" },
          { name: "FAMILIA_BIEN_PADRE" },
          { name: "ITEM_BIEN_PADRE" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_SERV_05",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "UNIDAD_MEDIDA" },
        ]
      },
      {
        name: "IND_CATALOGO_BIEN_SERV_06",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
        ]
      },
      {
        name: "IND_CTA_BS01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_CATALOGO_BIEN_SERV",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
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
