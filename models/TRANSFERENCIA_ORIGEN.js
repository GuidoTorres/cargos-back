const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRANSFERENCIA_ORIGEN', {
    TRANSFERENCIA_FINANCIERA_ID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    TRANSFERENCIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECUENCIA_TRANSFERENCIA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SECUENCIA_TRANSFERENCIA_PADRE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ANO_TRANSFERENCIA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SEC_EJEC_ORIGEN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    SEC_EJEC_DESTINO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EXPEDIENTE_ORIGEN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    GIRADO_ORIGEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SEC_GIRADO_ORIGEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MONTO_TRANSFERENCIA: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    ES_EXTORNADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ETAPA_TRANSFERENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_PROCESO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SALDO_DISPONIBLE: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TRANSFERENCIA_ORIGEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TRANSFERENCIA_FINANC",
        unique: true,
        fields: [
          { name: "TRANSFERENCIA_FINANCIERA_ID" },
        ]
      },
    ]
  });
};
