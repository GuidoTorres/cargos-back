var DataTypes = require("sequelize").DataTypes;
var _AGOSTO2022$ = require("./AGOSTO2022$");
var _JULIO2022$ = require("./JULIO2022$");
var _JUNIO2022$ = require("./JUNIO2022$");
var _MAYO2022$ = require("./MAYO2022$");
var _OCTUBRE2022$ = require("./OCTUBRE2022$");
var _SEPTIEMBRE2022$ = require("./SEPTIEMBRE2022$");
var _TB_DatosCTS = require("./TB_DatosCTS");
var _TB_EsPlCTS = require("./TB_EsPlCTS");
var _TB_EsPlConsCivil = require("./TB_EsPlConsCivil");
var _TB_EsPlEscolaridad = require("./TB_EsPlEscolaridad");
var _TB_EsPlLiquidaciones = require("./TB_EsPlLiquidaciones");
var _TB_EsPlPracticantes = require("./TB_EsPlPracticantes");
var _TB_HistLeyendas = require("./TB_HistLeyendas");
var _TB_HistorialLiquidaciones = require("./TB_HistorialLiquidaciones");
var _TB_HistorialPlanillas2 = require("./TB_HistorialPlanillas2");
var _TCCONS_CIVI = require("./TCCONS_CIVI");
var _TCCONT_HIST = require("./TCCONT_HIST");
var _TCDATO_CTS = require("./TCDATO_CTS");
var _TCDESC_JUDI = require("./TCDESC_JUDI");
var _TCIMPU_RENT_HIST = require("./TCIMPU_RENT_HIST");
var _TCLIQU = require("./TCLIQU");
var _TCLIQU_HIST = require("./TCLIQU_HIST");
var _TCPERS_CONS_CIVI = require("./TCPERS_CONS_CIVI");
var _TCPERS_CTS = require("./TCPERS_CTS");
var _TCPERS_ESTR_PLAN = require("./TCPERS_ESTR_PLAN");
var _TCPERS_LIQU = require("./TCPERS_LIQU");
var _TCPERS_PRAC = require("./TCPERS_PRAC");
var _TCPLAN = require("./TCPLAN");
var _TCPLAN_CABE = require("./TCPLAN_CABE");
var _TCPLAN_HIST = require("./TCPLAN_HIST");
var _TCPLAN_OBRA = require("./TCPLAN_OBRA");
var _TCREIN = require("./TCREIN");
var _TDACCE_ROL = require("./TDACCE_ROL");
var _TDDESC_JUDI = require("./TDDESC_JUDI");
var _TDROL_USUA = require("./TDROL_USUA");
var _TMACCE = require("./TMACCE");
var _TMACCE_LOG = require("./TMACCE_LOG");
var _TMAFP = require("./TMAFP");
var _TMCARG = require("./TMCARG");
var _TMCATE = require("./TMCATE");
var _TMCATE_OCUP = require("./TMCATE_OCUP");
var _TMCONC_AD = require("./TMCONC_AD");
var _TMCONC_REMU = require("./TMCONC_REMU");
var _TMCOND = require("./TMCOND");
var _TMCONS_CIVI = require("./TMCONS_CIVI");
var _TMCONT = require("./TMCONT");
var _TMCONV = require("./TMCONV");
var _TMDEPA = require("./TMDEPA");
var _TMDOMI = require("./TMDOMI");
var _TMENTI_FINA = require("./TMENTI_FINA");
var _TMEPS = require("./TMEPS");
var _TMESSA_VIDA = require("./TMESSA_VIDA");
var _TMESTA_CIVI = require("./TMESTA_CIVI");
var _TMESTR_PLAN = require("./TMESTR_PLAN");
var _TMESTR_PLAN_CC = require("./TMESTR_PLAN_CC");
var _TMESTR_PLAN_CTS = require("./TMESTR_PLAN_CTS");
var _TMESTR_PLAN_LI = require("./TMESTR_PLAN_LI");
var _TMESTR_PLAN_PR = require("./TMESTR_PLAN_PR");
var _TMFUEN = require("./TMFUEN");
var _TMGRAD_INST = require("./TMGRAD_INST");
var _TMMES = require("./TMMES");
var _TMMETA = require("./TMMETA");
var _TMMONE = require("./TMMONE");
var _TMMOTI_BAJA_DEHA = require("./TMMOTI_BAJA_DEHA");
var _TMMOTI_FIN_PERI = require("./TMMOTI_FIN_PERI");
var _TMMUNI = require("./TMMUNI");
var _TMNACI = require("./TMNACI");
var _TMNIVE_EDUC = require("./TMNIVE_EDUC");
var _TMNUME_SUEL = require("./TMNUME_SUEL");
var _TMOBRA = require("./TMOBRA");
var _TMOCUP = require("./TMOCUP");
var _TMOFIC = require("./TMOFIC");
var _TMPENS = require("./TMPENS");
var _TMPERI = require("./TMPERI");
var _TMPERS = require("./TMPERS");
var _TMPERS_HIST = require("./TMPERS_HIST");
var _TMPERS_HIST_LOG = require("./TMPERS_HIST_LOG");
var _TMPROF = require("./TMPROF");
var _TMPROV = require("./TMPROV");
var _TMREGI_LABO = require("./TMREGI_LABO");
var _TMREGI_PENS = require("./TMREGI_PENS");
var _TMROL = require("./TMROL");
var _TMSCTR_PENS = require("./TMSCTR_PENS");
var _TMSCTR_SALU = require("./TMSCTR_SALU");
var _TMSECT = require("./TMSECT");
var _TMSEXO = require("./TMSEXO");
var _TMSIST = require("./TMSIST");
var _TMSITU = require("./TMSITU");
var _TMSITU_EPS = require("./TMSITU_EPS");
var _TMSITU_ESPE = require("./TMSITU_ESPE");
var _TMUBIG = require("./TMUBIG");
var _TMUNID = require("./TMUNID");
var _TMUSUA = require("./TMUSUA");
var _TMUSUA = require("./TMUSUA");
var _TMVIA = require("./TMVIA");
var _TMVINC_FAMI = require("./TMVINC_FAMI");
var _TMZONA = require("./TMZONA");
var _TTTIPO_ACTI = require("./TTTIPO_ACTI");
var _TTTIPO_COMP = require("./TTTIPO_COMP");
var _TTTIPO_CUEN = require("./TTTIPO_CUEN");
var _TTTIPO_DOCU_IDEN = require("./TTTIPO_DOCU_IDEN");
var _TTTIPO_ESTA = require("./TTTIPO_ESTA");
var _TTTIPO_MODA_FORM = require("./TTTIPO_MODA_FORM");
var _TTTIPO_PAGO = require("./TTTIPO_PAGO");
var _TTTIPO_REMU = require("./TTTIPO_REMU");
var _TTTIPO_SUSP = require("./TTTIPO_SUSP");
var _TTTIPO_TRAB = require("./TTTIPO_TRAB");
var _TTTIPO_VARI = require("./TTTIPO_VARI");
var _asig$ = require("./asig$");
var _bono$ = require("./bono$");
var _cc$ = require("./cc$");
var _cts$ = require("./cts$");
var _fte$ = require("./fte$");
var _horas$ = require("./horas$");
var _plaza$ = require("./plaza$");
var _tb_planillas_tmp = require("./tb_planillas_tmp");
var _tmpDatosCTS = require("./tmpDatosCTS");
var _tmpDatosCTS2 = require("./tmpDatosCTS2");

function initModels(sequelize) {
  var AGOSTO2022$ = _AGOSTO2022$(sequelize, DataTypes);
  var JULIO2022$ = _JULIO2022$(sequelize, DataTypes);
  var JUNIO2022$ = _JUNIO2022$(sequelize, DataTypes);
  var MAYO2022$ = _MAYO2022$(sequelize, DataTypes);
  var OCTUBRE2022$ = _OCTUBRE2022$(sequelize, DataTypes);
  var SEPTIEMBRE2022$ = _SEPTIEMBRE2022$(sequelize, DataTypes);
  var TB_DatosCTS = _TB_DatosCTS(sequelize, DataTypes);
  var TB_EsPlCTS = _TB_EsPlCTS(sequelize, DataTypes);
  var TB_EsPlConsCivil = _TB_EsPlConsCivil(sequelize, DataTypes);
  var TB_EsPlEscolaridad = _TB_EsPlEscolaridad(sequelize, DataTypes);
  var TB_EsPlLiquidaciones = _TB_EsPlLiquidaciones(sequelize, DataTypes);
  var TB_EsPlPracticantes = _TB_EsPlPracticantes(sequelize, DataTypes);
  var TB_HistLeyendas = _TB_HistLeyendas(sequelize, DataTypes);
  var TB_HistorialLiquidaciones = _TB_HistorialLiquidaciones(sequelize, DataTypes);
  var TB_HistorialPlanillas2 = _TB_HistorialPlanillas2(sequelize, DataTypes);
  var TCCONS_CIVI = _TCCONS_CIVI(sequelize, DataTypes);
  var TCCONT_HIST = _TCCONT_HIST(sequelize, DataTypes);
  var TCDATO_CTS = _TCDATO_CTS(sequelize, DataTypes);
  var TCDESC_JUDI = _TCDESC_JUDI(sequelize, DataTypes);
  var TCIMPU_RENT_HIST = _TCIMPU_RENT_HIST(sequelize, DataTypes);
  var TCLIQU = _TCLIQU(sequelize, DataTypes);
  var TCLIQU_HIST = _TCLIQU_HIST(sequelize, DataTypes);
  var TCPERS_CONS_CIVI = _TCPERS_CONS_CIVI(sequelize, DataTypes);
  var TCPERS_CTS = _TCPERS_CTS(sequelize, DataTypes);
  var TCPERS_ESTR_PLAN = _TCPERS_ESTR_PLAN(sequelize, DataTypes);
  var TCPERS_LIQU = _TCPERS_LIQU(sequelize, DataTypes);
  var TCPERS_PRAC = _TCPERS_PRAC(sequelize, DataTypes);
  var TCPLAN = _TCPLAN(sequelize, DataTypes);
  var TCPLAN_CABE = _TCPLAN_CABE(sequelize, DataTypes);
  var TCPLAN_HIST = _TCPLAN_HIST(sequelize, DataTypes);
  var TCPLAN_OBRA = _TCPLAN_OBRA(sequelize, DataTypes);
  var TCREIN = _TCREIN(sequelize, DataTypes);
  var TDACCE_ROL = _TDACCE_ROL(sequelize, DataTypes);
  var TDDESC_JUDI = _TDDESC_JUDI(sequelize, DataTypes);
  var TDROL_USUA = _TDROL_USUA(sequelize, DataTypes);
  var TMACCE = _TMACCE(sequelize, DataTypes);
  var TMACCE_LOG = _TMACCE_LOG(sequelize, DataTypes);
  var TMAFP = _TMAFP(sequelize, DataTypes);
  var TMCARG = _TMCARG(sequelize, DataTypes);
  var TMCATE = _TMCATE(sequelize, DataTypes);
  var TMCATE_OCUP = _TMCATE_OCUP(sequelize, DataTypes);
  var TMCONC_AD = _TMCONC_AD(sequelize, DataTypes);
  var TMCONC_REMU = _TMCONC_REMU(sequelize, DataTypes);
  var TMCOND = _TMCOND(sequelize, DataTypes);
  var TMCONS_CIVI = _TMCONS_CIVI(sequelize, DataTypes);
  var TMCONT = _TMCONT(sequelize, DataTypes);
  var TMCONV = _TMCONV(sequelize, DataTypes);
  var TMDEPA = _TMDEPA(sequelize, DataTypes);
  var TMDOMI = _TMDOMI(sequelize, DataTypes);
  var TMENTI_FINA = _TMENTI_FINA(sequelize, DataTypes);
  var TMEPS = _TMEPS(sequelize, DataTypes);
  var TMESSA_VIDA = _TMESSA_VIDA(sequelize, DataTypes);
  var TMESTA_CIVI = _TMESTA_CIVI(sequelize, DataTypes);
  var TMESTR_PLAN = _TMESTR_PLAN(sequelize, DataTypes);
  var TMESTR_PLAN_CC = _TMESTR_PLAN_CC(sequelize, DataTypes);
  var TMESTR_PLAN_CTS = _TMESTR_PLAN_CTS(sequelize, DataTypes);
  var TMESTR_PLAN_LI = _TMESTR_PLAN_LI(sequelize, DataTypes);
  var TMESTR_PLAN_PR = _TMESTR_PLAN_PR(sequelize, DataTypes);
  var TMFUEN = _TMFUEN(sequelize, DataTypes);
  var TMGRAD_INST = _TMGRAD_INST(sequelize, DataTypes);
  var TMMES = _TMMES(sequelize, DataTypes);
  var TMMETA = _TMMETA(sequelize, DataTypes);
  var TMMONE = _TMMONE(sequelize, DataTypes);
  var TMMOTI_BAJA_DEHA = _TMMOTI_BAJA_DEHA(sequelize, DataTypes);
  var TMMOTI_FIN_PERI = _TMMOTI_FIN_PERI(sequelize, DataTypes);
  var TMMUNI = _TMMUNI(sequelize, DataTypes);
  var TMNACI = _TMNACI(sequelize, DataTypes);
  var TMNIVE_EDUC = _TMNIVE_EDUC(sequelize, DataTypes);
  var TMNUME_SUEL = _TMNUME_SUEL(sequelize, DataTypes);
  var TMOBRA = _TMOBRA(sequelize, DataTypes);
  var TMOCUP = _TMOCUP(sequelize, DataTypes);
  var TMOFIC = _TMOFIC(sequelize, DataTypes);
  var TMPENS = _TMPENS(sequelize, DataTypes);
  var TMPERI = _TMPERI(sequelize, DataTypes);
  var TMPERS = _TMPERS(sequelize, DataTypes);
  var TMPERS_HIST = _TMPERS_HIST(sequelize, DataTypes);
  var TMPERS_HIST_LOG = _TMPERS_HIST_LOG(sequelize, DataTypes);
  var TMPROF = _TMPROF(sequelize, DataTypes);
  var TMPROV = _TMPROV(sequelize, DataTypes);
  var TMREGI_LABO = _TMREGI_LABO(sequelize, DataTypes);
  var TMREGI_PENS = _TMREGI_PENS(sequelize, DataTypes);
  var TMROL = _TMROL(sequelize, DataTypes);
  var TMSCTR_PENS = _TMSCTR_PENS(sequelize, DataTypes);
  var TMSCTR_SALU = _TMSCTR_SALU(sequelize, DataTypes);
  var TMSECT = _TMSECT(sequelize, DataTypes);
  var TMSEXO = _TMSEXO(sequelize, DataTypes);
  var TMSIST = _TMSIST(sequelize, DataTypes);
  var TMSITU = _TMSITU(sequelize, DataTypes);
  var TMSITU_EPS = _TMSITU_EPS(sequelize, DataTypes);
  var TMSITU_ESPE = _TMSITU_ESPE(sequelize, DataTypes);
  var TMUBIG = _TMUBIG(sequelize, DataTypes);
  var TMUNID = _TMUNID(sequelize, DataTypes);
  var TMUSUA = _TMUSUA(sequelize, DataTypes);
  var TMUSUA = _TMUSUA(sequelize, DataTypes);
  var TMVIA = _TMVIA(sequelize, DataTypes);
  var TMVINC_FAMI = _TMVINC_FAMI(sequelize, DataTypes);
  var TMZONA = _TMZONA(sequelize, DataTypes);
  var TTTIPO_ACTI = _TTTIPO_ACTI(sequelize, DataTypes);
  var TTTIPO_COMP = _TTTIPO_COMP(sequelize, DataTypes);
  var TTTIPO_CUEN = _TTTIPO_CUEN(sequelize, DataTypes);
  var TTTIPO_DOCU_IDEN = _TTTIPO_DOCU_IDEN(sequelize, DataTypes);
  var TTTIPO_ESTA = _TTTIPO_ESTA(sequelize, DataTypes);
  var TTTIPO_MODA_FORM = _TTTIPO_MODA_FORM(sequelize, DataTypes);
  var TTTIPO_PAGO = _TTTIPO_PAGO(sequelize, DataTypes);
  var TTTIPO_REMU = _TTTIPO_REMU(sequelize, DataTypes);
  var TTTIPO_SUSP = _TTTIPO_SUSP(sequelize, DataTypes);
  var TTTIPO_TRAB = _TTTIPO_TRAB(sequelize, DataTypes);
  var TTTIPO_VARI = _TTTIPO_VARI(sequelize, DataTypes);
  var asig$ = _asig$(sequelize, DataTypes);
  var bono$ = _bono$(sequelize, DataTypes);
  var cc$ = _cc$(sequelize, DataTypes);
  var cts$ = _cts$(sequelize, DataTypes);
  var fte$ = _fte$(sequelize, DataTypes);
  var horas$ = _horas$(sequelize, DataTypes);
  var plaza$ = _plaza$(sequelize, DataTypes);
  var tb_planillas_tmp = _tb_planillas_tmp(sequelize, DataTypes);
  var tmpDatosCTS = _tmpDatosCTS(sequelize, DataTypes);
  var tmpDatosCTS2 = _tmpDatosCTS2(sequelize, DataTypes);

  TCPLAN_CABE.belongsToMany(TMPERS, { as: 'ID_PERS_TMPERs', through: TCPLAN, foreignKey: "ID_PLAN", otherKey: "ID_PERS" });
  TCPLAN_CABE.belongsToMany(TMPERS, { as: 'ID_PERS_TMPERS_TCPLAN_HISTs', through: TCPLAN_HIST, foreignKey: "ID_PLAN", otherKey: "ID_PERS" });
  TMPERS.belongsToMany(TCPLAN_CABE, { as: 'ID_PLAN_TCPLAN_CABEs', through: TCPLAN, foreignKey: "ID_PERS", otherKey: "ID_PLAN" });
  TMPERS.belongsToMany(TCPLAN_CABE, { as: 'ID_PLAN_TCPLAN_CABE_TCPLAN_HISTs', through: TCPLAN_HIST, foreignKey: "ID_PERS", otherKey: "ID_PLAN" });
  TDACCE_ROL.belongsTo(TMACCE, { as: "CO_ACCE_TMACCE", foreignKey: "CO_ACCE"});
  TMACCE.hasMany(TDACCE_ROL, { as: "TDACCE_ROLs", foreignKey: "CO_ACCE"});
  TDACCE_ROL.belongsTo(TMROL, { as: "CO_ROL_TMROL", foreignKey: "CO_ROL"});
  TMROL.hasMany(TDACCE_ROL, { as: "TDACCE_ROLs", foreignKey: "CO_ROL"});
  TDROL_USUA.belongsTo(TMROL, { as: "CO_ROL_TMROL", foreignKey: "CO_ROL"});
  TMROL.hasMany(TDROL_USUA, { as: "TDROL_USUAs", foreignKey: "CO_ROL"});
  TMACCE.belongsTo(TMSIST, { as: "CO_SIST_TMSIST", foreignKey: "CO_SIST"});
  TMSIST.hasMany(TMACCE, { as: "TMACCEs", foreignKey: "CO_SIST"});
  TDROL_USUA.belongsTo(TMUSUA, { as: "CO_USUA_TMUSUA", foreignKey: "CO_USUA"});
  TMUSUA.hasMany(TDROL_USUA, { as: "TDROL_USUAs", foreignKey: "CO_USUA"});
  TCPLAN.belongsTo(TCPLAN_CABE, { as: "ID_PLAN_TCPLAN_CABE", foreignKey: "ID_PLAN"});
  TCPLAN_CABE.hasMany(TCPLAN, { as: "TCPLANs", foreignKey: "ID_PLAN"});
  TCPLAN_HIST.belongsTo(TCPLAN_CABE, { as: "ID_PLAN_TCPLAN_CABE", foreignKey: "ID_PLAN"});
  TCPLAN_CABE.hasMany(TCPLAN_HIST, { as: "TCPLAN_HISTs", foreignKey: "ID_PLAN"});
  TCPERS_ESTR_PLAN.belongsTo(TMESTR_PLAN, { as: "ID_CALC_TMESTR_PLAN", foreignKey: "ID_CALC"});
  TMESTR_PLAN.hasMany(TCPERS_ESTR_PLAN, { as: "TCPERS_ESTR_PLANs", foreignKey: "ID_CALC"});
  TCDESC_JUDI.belongsTo(TMPERS, { as: "ID_PERS_TMPER", foreignKey: "ID_PERS"});
  TMPERS.hasOne(TCDESC_JUDI, { as: "TCDESC_JUDI", foreignKey: "ID_PERS"});
  TCPLAN.belongsTo(TMPERS, { as: "ID_PERS_TMPER", foreignKey: "ID_PERS"});
  TMPERS.hasMany(TCPLAN, { as: "TCPLANs", foreignKey: "ID_PERS"});
  TCPLAN_HIST.belongsTo(TMPERS, { as: "ID_PERS_TMPER", foreignKey: "ID_PERS"});
  TMPERS.hasMany(TCPLAN_HIST, { as: "TCPLAN_HISTs", foreignKey: "ID_PERS"});

  return {
    AGOSTO2022$,
    JULIO2022$,
    JUNIO2022$,
    MAYO2022$,
    OCTUBRE2022$,
    SEPTIEMBRE2022$,
    TB_DatosCTS,
    TB_EsPlCTS,
    TB_EsPlConsCivil,
    TB_EsPlEscolaridad,
    TB_EsPlLiquidaciones,
    TB_EsPlPracticantes,
    TB_HistLeyendas,
    TB_HistorialLiquidaciones,
    TB_HistorialPlanillas2,
    TCCONS_CIVI,
    TCCONT_HIST,
    TCDATO_CTS,
    TCDESC_JUDI,
    TCIMPU_RENT_HIST,
    TCLIQU,
    TCLIQU_HIST,
    TCPERS_CONS_CIVI,
    TCPERS_CTS,
    TCPERS_ESTR_PLAN,
    TCPERS_LIQU,
    TCPERS_PRAC,
    TCPLAN,
    TCPLAN_CABE,
    TCPLAN_HIST,
    TCPLAN_OBRA,
    TCREIN,
    TDACCE_ROL,
    TDDESC_JUDI,
    TDROL_USUA,
    TMACCE,
    TMACCE_LOG,
    TMAFP,
    TMCARG,
    TMCATE,
    TMCATE_OCUP,
    TMCONC_AD,
    TMCONC_REMU,
    TMCOND,
    TMCONS_CIVI,
    TMCONT,
    TMCONV,
    TMDEPA,
    TMDOMI,
    TMENTI_FINA,
    TMEPS,
    TMESSA_VIDA,
    TMESTA_CIVI,
    TMESTR_PLAN,
    TMESTR_PLAN_CC,
    TMESTR_PLAN_CTS,
    TMESTR_PLAN_LI,
    TMESTR_PLAN_PR,
    TMFUEN,
    TMGRAD_INST,
    TMMES,
    TMMETA,
    TMMONE,
    TMMOTI_BAJA_DEHA,
    TMMOTI_FIN_PERI,
    TMMUNI,
    TMNACI,
    TMNIVE_EDUC,
    TMNUME_SUEL,
    TMOBRA,
    TMOCUP,
    TMOFIC,
    TMPENS,
    TMPERI,
    TMPERS,
    TMPERS_HIST,
    TMPERS_HIST_LOG,
    TMPROF,
    TMPROV,
    TMREGI_LABO,
    TMREGI_PENS,
    TMROL,
    TMSCTR_PENS,
    TMSCTR_SALU,
    TMSECT,
    TMSEXO,
    TMSIST,
    TMSITU,
    TMSITU_EPS,
    TMSITU_ESPE,
    TMUBIG,
    TMUNID,
    TMUSUA,
    TMUSUA,
    TMVIA,
    TMVINC_FAMI,
    TMZONA,
    TTTIPO_ACTI,
    TTTIPO_COMP,
    TTTIPO_CUEN,
    TTTIPO_DOCU_IDEN,
    TTTIPO_ESTA,
    TTTIPO_MODA_FORM,
    TTTIPO_PAGO,
    TTTIPO_REMU,
    TTTIPO_SUSP,
    TTTIPO_TRAB,
    TTTIPO_VARI,
    asig$,
    bono$,
    cc$,
    cts$,
    fte$,
    horas$,
    plaza$,
    tb_planillas_tmp,
    tmpDatosCTS,
    tmpDatosCTS2,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
