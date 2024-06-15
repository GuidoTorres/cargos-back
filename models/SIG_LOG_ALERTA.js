const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_LOG_ALERTA', {
    SECUENCIA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_SEC: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    MENSAJE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    HORA: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_LOG_ALERTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_LOG_ALERTA",
        unique: true,
        fields: [
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
