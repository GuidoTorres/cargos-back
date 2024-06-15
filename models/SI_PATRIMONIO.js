const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PATRIMONIO', {
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
    D_ITEM_CATALOGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VALOR_NEA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.DATE,
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
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    FECHA_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
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
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CODIGO_MARCA: {
      type: DataTypes.DECIMAL(5,0),
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
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    COD_ESTABLEC_SIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_COD_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    COD_CATEGORIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    D_CORTO_COD_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_PATRIMONIO",
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
