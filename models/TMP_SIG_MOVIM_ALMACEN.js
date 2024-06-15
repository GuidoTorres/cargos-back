const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_MOVIM_ALMACEN', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    PROC_GUIA: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    NRO_FACTURA: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    FECHA_FACTURA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INDI_CONFOR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_DOCUMTO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NRO_GUIA: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ESTADO_KARDEX: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NOMBRE_PROVEEDOR: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    ESTADO_ACTIVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_DEVENG: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_MOVIMTO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SECUENCIA_SIAF: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    NRO_MOVIM_ACTIVO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FLAG_MOVIMTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_ESTRATEGICO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_DESTINO_PED: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    CENTRO_COSTO_PED: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    SEC_EJEC_PED: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ESTADO_RECEPCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_EJEC_TRAN: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_MOVIM_ALMACEN',
    schema: 'dbo',
    timestamps: false
  });
};
