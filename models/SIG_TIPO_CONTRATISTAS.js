const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_CONTRATISTAS', {
    TIPO_PERSONA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SIGLA_TIPO_PERSONA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ABREV_TIPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SITUACION_TRIBUTARIA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    BOLETA_BCO_NACION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RECIBO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FACTURA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    BOLETA_VENTA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OC_DOC_FTE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OS_DOC_FTE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    IGV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RENTA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    IES: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_PERSONA_ANT: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
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
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_CONTRATISTAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_CONTRATISTAS",
        unique: true,
        fields: [
          { name: "TIPO_PERSONA" },
        ]
      },
    ]
  });
};
