const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROY_PLANILLA_PASAJE', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    SEC_ITEM_PLA_PAS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_COMI: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    AGENCIA_OP: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FLAG_REPROG_PVI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_PVI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FF_PVI: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ANULA_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REPROG_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_INICIO_COMISION_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DIAS_PVI: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    CLASIFICADOR_VIATICO_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OBSERVACION_PVI: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO_TOTAL_VIATICO_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_PASAJE_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_VIATICO_REND_CD_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_VIATICO_REND_DJ_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_PASAJE_REND_CD_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR_PASAJE_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_RENDICION_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    REGISTRO_SIAF_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_OPCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PLANILLA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ANO_PLAN_PAS: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ORDEN_PASAJE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_AGENCIA_OP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_OP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERVACION_OP: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_CONSOLIDA_OP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CON_OP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CLASIFICADOR_PASAJE_OP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_OP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG_OP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_TOTAL_PASAJE_OP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO_PVI: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA_PVI: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_TOTAL_VIATICO_MON_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_PASAJE_MON_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO_OP: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA_OP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_TOTAL_PASAJE_MON_OP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_FINAL_COMISION_PVI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MARCA_PLANILLA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA_ORDEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ANU_OP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FUENTE_OP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FF_CP_PVI: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_CP_PVI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FF_CP_OP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_CP_OP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PASAJE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_VIATICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_RENDICION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_PLANILLA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    PORCENTAJE: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    MES_CALENDARIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CONFORME: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PRECOM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ADICIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONTO_TOTAL_COMB_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR_COMB_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_COMB_REND_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_PEA_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR_PEA_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_PEA_REND_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_TUUA_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR_TUUA_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_TUUA_REND_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TOTAL_MOV_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CLASIFICADOR_MOV_PVI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_MOV_REND_PVI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PROYECTO_FIN: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cuser_id_pvi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipo_reg_pvi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_RECIBO_INGRESO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ORIGEN_FTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_REND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR_MOV_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_TUUA_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_PEA_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_COMB_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_PASAJE_OP: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_PASAJE_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ID_CLASIFICADOR_VIATICO_PVI: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    NRO_RESOLUCION_PVI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_HORAS_PVI: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_GRUPO_PVGV: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    SEC_PLANTILLA_PVGV: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    SEC_GRUPO_DJ: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    SEC_PLANTILLA_DJ: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    nro_minutos_pvi: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    rpte_al: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    rpte_asunto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    rpte_referen: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    rpte_observ: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    flag_autoriza_rendicion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NDOC_SUST_ANULA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NDOC_REC_INGRESO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    clasificador_combustible_pvi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    clasificador_ogastos_pvi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    clasificador_sdiversos_pvi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    monto_total_combustible_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_total_ogastos_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_total_sdiversos_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_combustible_rend_cd_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_ogastos_rend_cd_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_sdiversos_rend_cd_pvi: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    fecini_comision_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecfin_comision_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag_reprog: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    devolucion_siaf: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    devolucion_marco: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    devolucion_sec: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    flag_ringreso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_GRUPO_RV: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    SEC_PLANTILLA_RV: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    HOJA_RUTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG_DJ_RTOTAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_PLANILLA_VERSION: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROY_PLANILLA_PASAJE',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PROY_PLAN_01",
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_PEDIDO" },
          { name: "SEC_ITEM_COMI" },
          { name: "TIPO_OPCION" },
          { name: "MARCA_PLANILLA" },
          { name: "MES_CALENDARIO" },
        ]
      },
      {
        name: "PK_PLANILLA_PASAJE",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_ITEM_PLA_PAS" },
        ]
      },
    ]
  });
};
