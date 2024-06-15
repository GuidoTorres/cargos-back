const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_CERTIFICACION_HIST', {
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
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_CERTIFICACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CERTIFICACION_OLD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_TIPO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_CERTIFICACION_HIST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_CERTIFICACION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
