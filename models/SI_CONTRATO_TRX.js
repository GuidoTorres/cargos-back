const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_CONTRATO_TRX', {
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
    ID_SI_CONTRATO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONCEPTO_CONTRATO: {
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
    FECHA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA_PAGO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
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
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_CONTRATO_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_CONTRATO_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_CONTRATO" },
        ]
      },
    ]
  });
};
