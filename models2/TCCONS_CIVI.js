const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCCONS_CIVI', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_CONS_CIVI: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "01"
    },
    ID_OBRA: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: "000001"
    },
    NU_FIPA_DIAS_TRAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    NU_FIPA_DIAS_DOMI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    NU_NAVI_DIAS_TRAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    NU_NAVI_DIAS_DOMI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    AP_C28: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AP_C29: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AP_C30: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AP_C31: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AP_C32: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NU_DIAS_C28: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_C29: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_C30: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_C31: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_C32: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TCCONS_CIVI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P_Pers_ConsCivil_1",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
