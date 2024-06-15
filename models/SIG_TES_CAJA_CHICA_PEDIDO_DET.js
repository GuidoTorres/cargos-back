const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_PEDIDO_DET', {
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
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    DESTINO: {
      type: DataTypes.STRING(250),
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
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FEC_MOVILIDAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_MOVILIDAD: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SISVALE_LISTA_ID: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_PEDIDO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CCHICA_PEDIDO_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "SEC_PEDIDO" },
          { name: "SEC_DESTINO" },
        ]
      },
    ]
  });
};
