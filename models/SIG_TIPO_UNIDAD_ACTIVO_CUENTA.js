const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_UNIDAD_ACTIVO_CUENTA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_UNIDAD_ACTIVO',
        key: 'CODIGO_TIPO_UA'
      }
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_TIPO_ALTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_OTRO_PLIEGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MAYOR_DEPR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DEPR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_DEPRECIABLE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CUENTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_MODALIDAD_UA: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    TASA_DEPRECIACION: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MAYOR_CONCESION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_CONCESION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_CONCESION_DEPR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_CONCESION_DEPR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_DETERIORO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DETERIORO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_AFECTACION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_AFECTACION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_CESION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_CESION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_CESION_DEPR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_CESION_DEPR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_REASIGNA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_REASIGNA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_DISMINUCION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DISMINUCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_UNIDAD_ACTIVO_CUENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_UND_ACTIVO_CUENTA",
        fields: [
          { name: "CODIGO_TIPO_UA" },
        ]
      },
      {
        name: "PK_SIG_TIPO_UNIDAD_ACTIVO_CTA",
        unique: true,
        fields: [
          { name: "SECUENCIA" },
          { name: "ANO_EJE" },
        ]
      },
    ]
  });
};
