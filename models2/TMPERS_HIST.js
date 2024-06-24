const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPERS_HIST', {
    FE_HIST: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ID_PLAN: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    NU_DIAS_TRAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HO_TRAB: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      defaultValue: 0
    },
    MI_TRAB: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      defaultValue: 0
    },
    HO_EXTR_TRAB: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      defaultValue: 0
    },
    MI_EXTR_TRAB: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      defaultValue: 0
    },
    NU_DIAS_SUBS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    NU_DIAS_NO_LABO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ID_AFP: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    MO_AOB: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    MO_SEGU: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    MO_COMI: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    ID_OBRA: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: "0"
    },
    FE_INIC_REIN: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FE_FIN: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MO_JORN_BASI: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    ID_COND: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    ID_META: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    DE_FUNC: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CO_CARG: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    ID_SECT: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    ID_ENTI_FINA_CTS: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_MONE_CTS: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NU_CUEN_CTS: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NU_CUEN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ID_SITU: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DE_VIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NU_VIA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MO_REMU: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    MO_DS311: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    NU_DOMI_INTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ID_MOTI_FIN_PERI: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_CONS_CIVI: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    NU_HIJO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_FUEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NU_DIAS_DESC_CTS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_DESC_GRAT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TMPERS_HIST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HistorialTrabajo",
        unique: true,
        fields: [
          { name: "FE_HIST" },
          { name: "ID_PERS" },
          { name: "ID_PLAN" },
        ]
      },
    ]
  });
};
