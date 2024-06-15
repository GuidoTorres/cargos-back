const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_pedidos', {
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
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    FONDO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    SEC_PEDIDO_PROY: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO_PEDIDO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MES_PEDIDO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    SECUENCIA_POA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    NO_OBJECION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_OBJECION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOC_REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PROYECTO_MAE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PROYECTO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_VIAPAS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
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
    FECHA_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FUENTE_CP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    FLAG_ADQ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ROL_ENCARGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_entidad: {
      type: DataTypes.CHAR(1),
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
    CUSER_ID_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG_ACT: {
      type: DataTypes.STRING(20),
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
    }
  }, {
    sequelize,
    tableName: 'sig_proy_pedidos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_pedidos__17EE3AAF",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_PEDIDO" },
        ]
      },
    ]
  });
};
