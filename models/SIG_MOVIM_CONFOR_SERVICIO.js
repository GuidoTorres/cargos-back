const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_CONFOR_SERVICIO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    INDI_CONFOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOCUMTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ESTADO_KARDEX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_DEVENG: {
      type: DataTypes.STRING(1),
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
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SECUENCIA_SIAF: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_MOVIM_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    RESPONSABLE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ESTRATEGICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_DESTINO_PED: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO_PED: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_EJEC_PED: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ESTADO_RECEPCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_EJEC_TRAN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    DOCUM_CONFIRMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_CONFIRMA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESPO_CONFIRMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    glosa: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_CONFOR_SERVICIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVIM_CF_02",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_CF_03",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
      {
        name: "PK_SIG_MOVIM_CF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
    ]
  });
};
