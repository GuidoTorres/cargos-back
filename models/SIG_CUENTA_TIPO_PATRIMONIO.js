const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUENTA_TIPO_PATRIMONIO', {
    TIPO_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    CLASE_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_DEPREC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DEPREC: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MAYOR_ACTIVO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_ACTIVO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'SIG_CUENTA_TIPO_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CTA_TIPO_PAT",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_PATRIM" },
          { name: "CLASE_PATRIM" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
