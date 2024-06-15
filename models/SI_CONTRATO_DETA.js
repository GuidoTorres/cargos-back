const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_CONTRATO_DETA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_CONTRATO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_CONTRATO',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_CONTRATO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_CONTRATO',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_CONTRATO_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONTO_EJECUTADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_IMPORTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_ORDEN: {
      type: DataTypes.DATE,
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
    tableName: 'SI_CONTRATO_DETA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_CONTRATO_DETA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_CONTRATO" },
          { name: "ID_SI_CONTRATO_DETA" },
        ]
      },
      {
        name: "XIF1SI_CONTRATO_DETA",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_CONTRATO" },
        ]
      },
      {
        name: "XPKSI_CONTRATO_DETA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_CONTRATO" },
          { name: "ID_SI_CONTRATO_DETA" },
        ]
      },
    ]
  });
};
