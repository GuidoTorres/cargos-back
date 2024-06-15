const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_ADQUISICIONES_EXP', {
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
    NRO_ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
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
      allowNull: false
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
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
    CANT_ITEM: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0
    },
    MONTO_SOLES: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    MES_PROCESO: {
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
    },
    RUC_PROV: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    NOMBRE_PROV: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SGE_ADQUISICIONES_EXP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SGE_ADQUISICIONES_EXP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
