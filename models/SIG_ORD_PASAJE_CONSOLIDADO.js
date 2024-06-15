const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORD_PASAJE_CONSOLIDADO', {
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
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FECHA_CONSOLID: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_DOCU_PAGO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_DOCU_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO_TOTAL_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FUENTE_EXT: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "S"
    },
    NRO_CONS_PAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FLAG_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORD_PASAJE_CONSOLIDADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_O_P_C_01",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "NRO_CONSOLID" },
        ]
      },
    ]
  });
};
