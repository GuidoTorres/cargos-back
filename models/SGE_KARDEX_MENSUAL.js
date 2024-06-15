const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_KARDEX_MENSUAL', {
    ANO_EJE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MES_PROCESO: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    TIPO_ENTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    CANT_INGRESO: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    CANT_EGRESO: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    STOCK_ACTUAL: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    PRECIO_PROMED: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    SALDO_INICIAL: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_INGRESO: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_EGRESO: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    SALDO_VALOR: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CATEGORIA_GASTO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    GRUPO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    MODALIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ELEMENTO_GASTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SGE_KARDEX_MENSUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SGE_KARDEX_MENSUAL",
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
