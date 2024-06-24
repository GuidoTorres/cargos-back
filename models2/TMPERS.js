const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPERS', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_PERS_ANT: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    ID_FUEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_META: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    CO_CARG: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    ID_SECT: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ID_OFIC: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ID_UNID: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ID_MONE: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    ID_TIPO_CUEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_ENTI_FINA: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_DOMI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_COND: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ID_CONC_REMU: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    MO_ASIG_FAMI: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true,
      defaultValue: 0
    },
    NU_REMU_ANUA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MO_REMU: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true,
      defaultValue: 0
    },
    MO_DS311: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    NU_DIAS_TRAB: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_TELE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NU_HIJO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_LIBR_MILI: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    NU_CUEN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DE_FUNC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DE_CORRE_ELEC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DE_ESPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_ESTA_CIVI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NU_RUC: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    ID_PROF: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ID_MUNI: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ID_GRAD_INST: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_TIPO_REMU: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_PENS: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ES_PENS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    NU_MES: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ID_AFP: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ES_ACTI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_SCTR: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_TIPO_DOCU: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    NU_DOCU: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AP_PATE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AP_MATE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DE_NOMB: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FE_NACI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID_SEXO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_NACI: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ID_ESSA_VIDA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_VIA: {
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
    NU_DOMI_INTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ID_ZONA: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DE_ZONA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DE_REFE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ID_TIPO_ESTA: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_UBIG: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ID_TIPO_TRAB: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_REGI_LABO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_NIVE_EDUC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_OCUP: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    ES_PERS_DISC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_REGI_PENS: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FE_INSC_REGI_PENS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DE_CUSPP: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    ID_SCTR_SALU: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_SCTR_PENS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CONT: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ES_SUJE_REGI_ALTE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_SUJE_JORN_MAXI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_SUJE_HORA_NOCT: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    IN_OTRO_INGR_QUIN_CATE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_SIND: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_PERI: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ES_AFIL_EPS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_EPS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_SITU_EPS: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ES_EXON_QUIN_CATE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_SITU_ESPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_TIPO_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ES_AFIL_ASEG_PENS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ID_CATE_OCUP: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_CONV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CATE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FE_INIC_REIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID_MOTI_FIN_PERI: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_TIPO_MODA_FORM: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    HO_TRAB: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      defaultValue: 0
    },
    MI_TRAB: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      defaultValue: 0
    },
    HO_EXTR_TRAB: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      defaultValue: 0
    },
    MI_EXTR_TRAB: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      defaultValue: 0
    },
    MO_DESC_JUDI: {
      type: DataTypes.DECIMAL(4,4),
      allowNull: true,
      defaultValue: 0
    },
    NU_PLAZA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CO_ESSA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NU_RUC_EMPR_DEST: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    NU_TASA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ES_BASI_HORA: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_EXON_CUAR_CATE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ES_SEGU_ACCI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    NU_DIAS_SUBS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_DIAS_NO_LABO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ID_OBRA: {
      type: DataTypes.CHAR(6),
      allowNull: true
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ID_SITU: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ID_CONS_CIVI: {
      type: DataTypes.CHAR(2),
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
    },
    FE_HIST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ES_PROF_HABI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FE_FIN_HIST_1: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_INI_HIST_2: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_FIN_HIST_2: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_INI_HIST_3: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_FIN_HIST_3: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_INI_HIST_4: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_FIN_HIST_4: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1990"
    },
    FE_INI_HIST_1: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(1)\/(1))\/(1900"
    },
    ES_DL854: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MO_DL854: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    NU_DIAS_DESC_ESCO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NU_SUEL: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    CO_USER_CREA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FE_USER_CREA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_USER_MODI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FE_USER_MODI: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMPERS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_Personal",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
