const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVOLUCION_CAB', {
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
    SEC_DEVOLUCION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CERTIFICADO_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CERTIFICADO_SECUENCIA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_DOC: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NUM_DOC: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVOLUCION_CAB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DEV_CAB",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_DEVOLUCION" },
        ]
      },
    ]
  });
};
