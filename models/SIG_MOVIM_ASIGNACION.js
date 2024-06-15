const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_ASIGNACION', {
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
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_ASIGNAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ASIGNAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_AUTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_ASIGNACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVIM_ASIG_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "NRO_ASIGNAC" },
        ]
      },
      {
        name: "PK_SIG_MOVIM_ASIG",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "NRO_ASIGNAC" },
          { name: "SEC_ASIGNAC" },
        ]
      },
    ]
  });
};
