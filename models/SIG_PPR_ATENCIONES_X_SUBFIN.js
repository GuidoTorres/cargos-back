const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_ATENCIONES_X_SUBFIN', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MES_01: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_02: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_03: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_04: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_05: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_06: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_07: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_08: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_09: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_10: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_11: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MES_12: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_ATENCIONES_X_SUBFIN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPR_ATENCIONES_X_SUBFIN",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SUB_FINALIDAD" },
          { name: "COD_ESTABLEC" },
        ]
      },
    ]
  });
};
