const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ejecutora', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sector: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    gestora: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ejecutora: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ubigeo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    localidad: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    lugar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lugar_num: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lugar_mza: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lugar_lot: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    e_mail: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ruc_ejec: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    seccion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    apartado_postal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cod_ciudad: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sectorista: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    residente: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    conexion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    pozo_tierra: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sede_alterna: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    f_plan_act_97: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    f_coordinador: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    f_registro_siaf: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    f_pres_ingresos: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    f_act_metas: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    f_act_calendario: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_ing: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_baja: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ds_347_90_ef: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    expediente: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rendicion: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nota: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    secuencia_oper: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    secuencia_t6: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    es_pliego: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    sec_func: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    mes_apertura: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    mes_cierre: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    reg_multiple: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    liquidacion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    secuencia_trans: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    liquidacion_pliego: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nota_gasto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nota_calendario: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    siglas: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    proceso: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    planilla: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    seace: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    secuencia_gsc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tipo_unidad: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ejecutora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_EJECUTORA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "pk_ejecutora",
        unique: true,
        fields: [
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
