const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_PEDIDO', {
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
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FEC_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    COD_EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CCOSTO_EMPLEADO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESP_CCOSTO_EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_MOVILIDAD: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_SALIDA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    JUSTIFICACION_GASTO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    JUSTIFICACION_RECHAZO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_PEDIDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CCHICA_PEDIDO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "SEC_PEDIDO" },
        ]
      },
    ]
  });
};
