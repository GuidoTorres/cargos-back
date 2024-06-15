const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PAAC_CONSOLIDADO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_INICIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_FINAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_CONS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PAAC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'GRUPO_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    CATEGORIA_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'GRUPO_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    GRUPO_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'GRUPO_CIIU',
        key: 'TIPO_CIIU'
      }
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_PROPUESTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_PLAN: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    FECHA_TCAMBIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_COMPRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MODAL_COMPRA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NIVEL_DESCENT: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    SECU_EJE2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECU_EJE3: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_SEC_RESOL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NRO_GENER_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tipo_organismo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PRECEDENTE: {
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
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CONVOCACION_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORGANO_CONVOCACION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TIPO_PROCESO_OLD: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VERIFICA_PPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_VERIFICA_PPTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_resol: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_autoriza: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_autoriza: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nro_autoriza: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    requerimiento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    documento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    folio1: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    folio2: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    folio3: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    estado_reprogramacion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONSOLID_ORG: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    valor_plan_old: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    sec_cuadro_ini: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_INCLUYE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_EST_MDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_EST_MDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_EST_MDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    GLOSA_EST_MDO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MES_EST_MDO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    C_USER_EST_MDO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    modalidad_csc: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_PSA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_EJEC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_TIPO_EJEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_AUTO_EJEC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DIFUSION_PAAC_OSCE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_PRECEDENTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_CONCLUIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_PROY: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
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
    REG_ESPECIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_SNIP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOC_VIA_SNIP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_CONTRATACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PROCESO_ORIG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_TIPO_CERT: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_PAAC_CONSOLIDADO',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PAAC_CONS_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_SIG_PAAC_CONS_02",
        fields: [
          { name: "TIPO_CIIU" },
          { name: "CATEGORIA_CIIU" },
          { name: "GRUPO_CIIU" },
        ]
      },
      {
        name: "IND_SIG_PAAC_CONS_03",
        fields: [
          { name: "PAIS" },
          { name: "DEPARTAMENTO" },
          { name: "PROVINCIA" },
          { name: "DISTRITO" },
        ]
      },
      {
        name: "IND_SIG_PAAC_CONS_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_CONSOLID" },
          { name: "sec_cuadro_ini" },
        ]
      },
      {
        name: "IND_SIG_PAAC_CONS_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
        ]
      },
      {
        name: "PK_SIG_PAAC_CONSOLID",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
        ]
      },
    ]
  });
};
