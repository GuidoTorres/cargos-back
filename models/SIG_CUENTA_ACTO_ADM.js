const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUENTA_ACTO_ADM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACTO_ADM: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_ORIG: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_ORIG: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_DEST: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DEST: {
      type: DataTypes.STRING(8),
      allowNull: true
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
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUENTA_ACTO_ADM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CUENTA_ACTO_ADM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SECUENCIA" },
          { name: "TIPO_ACTO_ADM" },
        ]
      },
    ]
  });
};
