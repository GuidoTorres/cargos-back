const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_MOVIMIENTO_AUD', {
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
    SEC_AUD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    C_USUARIO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PETICION: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    COD_PETICION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_REGISTRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COD_ERROR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MENSA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    ARCHIVO: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_MOVIMIENTO_AUD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INT_MOVIMIENTO_AUD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_AUD" },
        ]
      },
    ]
  });
};
