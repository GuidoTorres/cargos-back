const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_REQ_ENTRADA_ALMACEN', {
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
    NRO_REQUERIM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REQUERIM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_REQUERIM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_APROB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_RECEPCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PERSONA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_EJEC_TRAN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_DOC_APROB: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESC_DOC_APROB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOMBRE_PROVEEDOR: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_REQ_ENTRADA_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_REQENT_ALM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_REQUERIM" },
        ]
      },
    ]
  });
};
