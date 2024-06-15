const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_KARDEX_EQUIVALENCIA_CUENTA', {
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
    CORRELATIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    CLASIFICADOR_OLD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR_OLD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_OLD: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_NEW: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_NEW: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_KARDEX_EQUIVALENCIA_CUENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_KAR_EQUI_CUENTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CORRELATIVO" },
        ]
      },
    ]
  });
};
