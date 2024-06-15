const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOG_TRANSFERENCIA', {
    ID_LOG: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_TRANSMITIDO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TRANSACCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    MES_TRANSMITIDO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    USUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MENSAJE: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMBRE_PC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LOG_TRANSFERENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LOG_TRANSFERENCIA",
        unique: true,
        fields: [
          { name: "ID_LOG" },
          { name: "SEC_EJEC" },
          { name: "ANO_TRANSMITIDO" },
          { name: "TIPO_ENVIO" },
          { name: "TRANSACCION" },
        ]
      },
    ]
  });
};
