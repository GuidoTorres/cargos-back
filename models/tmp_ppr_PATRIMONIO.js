const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_ppr_PATRIMONIO', {
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
    ID_SI_PATRIMONIO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VALOR_NEA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEDIDAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO_ACTUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CONSERVACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_FIN_VIDA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DESCRIPCION_ACTIVO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CODIGO_MARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRE_MARCA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ESTADO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    D_COD_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    COD_CATEGORIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    D_CORTO_COD_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ANO_PATRIMONIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MES_PATRIMONIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DES_MES_PATRIMONIO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_MOVIMTO_PATRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VALOR_NETO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOM_SUB_CTA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ASIGNACION: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DEPREC_ACUMULADA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_RENAES: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NOM_SECTOR: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NOM_PLIEGO: {
      type: DataTypes.STRING(156),
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
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
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
    }
  }, {
    sequelize,
    tableName: 'tmp_ppr_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PATRIMONIO_01",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_PATRIMONIO" },
        ]
      },
    ]
  });
};
