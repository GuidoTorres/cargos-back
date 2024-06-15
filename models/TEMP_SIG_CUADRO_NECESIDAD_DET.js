const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_SIG_CUADRO_NECESIDAD_DET', {
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
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
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
    DESCRIP_SERVICIO: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    STOCK_ASIG: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_STOCK: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    FTE_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOR_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_HIST: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_HIST: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PORC_GASTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    FLAG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag_migra: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_origen_externo_det: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cantidad_unitaria: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    ID_KIT: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    tipo_calculo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    flag_origen_det: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ITEM_KIT: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TEMP_SIG_CUADRO_NECESIDAD_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TEMP_SIG_CUADRO_NECESIDAD_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SECUENCIA" },
          { name: "FASE_CUADRO" },
          { name: "ITEM_SEC" },
        ]
      },
    ]
  });
};
