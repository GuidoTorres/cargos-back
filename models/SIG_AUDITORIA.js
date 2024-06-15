const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_AUDITORIA', {
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
    TIPO_MOVIMIENTO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_ORIGEN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SOLICITANTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_TRANSACCION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_TRANSACCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_TRANSACCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_TRANSACCION: {
      type: DataTypes.DECIMAL(10,0),
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
    TIPO_CONSOLID: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_AUDITORIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_AUDITORIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MOVIMIENTO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
