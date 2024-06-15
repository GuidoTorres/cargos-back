const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_MOV', {
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
    SEC_MOVIMTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FEC_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESP_AUTORIZACION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FEC_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_COMPROBANTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_COMPROBANTE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CHEQUE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_CHEQUE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_ASIGNADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PORCENT_ENTREGA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    PORCENT_AUTORIZACION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    MONTO_ENTREGA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_AUTORIZACION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ANO_EJE_PROV: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_PROV: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_PROV: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ANO_EJE_REND: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_REND: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_REND: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NRO_RUC: {
      type: DataTypes.STRING(11),
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
    MONTO_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_IGV: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_RETENCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_EXONERADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_NETO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_RENDICION: {
      type: DataTypes.CHAR(1),
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
    SEC_CAJA_REND: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    AUTORIZACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NRO_VALE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FEC_RENDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_RESERVA_VALE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FL_CARGA_RC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_RCONSUMO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_CTRL_PAO_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FEC_EMISION: {
      type: DataTypes.DATE,
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
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_VALE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FEC_INICIO_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FINAL_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_INICIO_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_FIN_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORIGEN_COMISION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESTINO_COMISION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEC_MOVIMTO_BF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_MOV',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_CHICA_MOV",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "SEC_MOVIMTO" },
        ]
      },
    ]
  });
};
