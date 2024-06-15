const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_docu_pasaje', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_DOCU: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCU_INTERNO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    NRO_DOCU_PAGO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_TOTAL_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_DOCU_INTERNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_DOCU_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_GENERA_OS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_CONSOLIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_DOCU_PAGO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_CUADRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_DOCU_COB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MNTO_DOCU_CRE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FUENTE_CP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IGV: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    MNTO_IGV: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_SOLES: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
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
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PORCENTAJE: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    TASA: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_docu_pasaje',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_docu_pa__2CE95795",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_ITEM_DOCU" },
        ]
      },
    ]
  });
};
