const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_KARDEX_MENSUAL_TRX', {
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
    MES_PROCESO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    STOCK_INICIAL: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_INGRESO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_EGRESO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    STOCK_ACTUAL: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    PRECIO_PROMED: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    SALDO_INICIAL: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INGRESO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_EGRESO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    SALDO_VALOR: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true,
      defaultValue: 0
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CATEGORIA_GASTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MODALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ELEMENTO_GASTO: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SGE_KARDEX_MENSUAL_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_KARDEX_MENSUAL_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_BIEN" },
          { name: "CLASIFICADOR" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
          { name: "TIPO_PPTO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
