const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_ORDEN', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_ORDEN: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ORDEN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONCEPTO_ORDEN: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    PROVEEDOR_NRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    D_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PROVEEDOR_GIRO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO_SUBTOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_DESCUENTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOCUMENTO_REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    NRO_PROCESO_SELECCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GLOSA_ORDEN: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    ESTADO_ORDEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_ORDEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_ORDEN",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_ORDEN" },
        ]
      },
    ]
  });
};
