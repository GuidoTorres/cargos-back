const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EQUIVALENCIA_CENTRO', {
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
    SECUENCIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO_ANT: {
      type: DataTypes.STRING(15),
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
    TIPO_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_EQUIVALENCIA_CENTRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_EQUIV_CENTRO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_EQUIV_CENTRO_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO_ANT" },
        ]
      },
      {
        name: "PK__SIG_EQUIVALENCIA__1C9DE133",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
