const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_techo_presupuestal', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    porc_techo: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    ppto_progra: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    ppto_aprob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    ppto_asignado: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    ppto_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_progra: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_asig: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_aprob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    indicador: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    paac_inicial: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    paac_modif: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    porc_asig: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    CUADRE_PPTO_PROGRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_APROB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_ASIGNA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PPTO_RESER: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_CONTAB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_PIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_CPIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PAAC_AUTORIZADO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_RESER2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'sig_techo_presupuestal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_techo_pres_01",
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES_02",
        fields: [
          { name: "ano_eje" },
          { name: "clasificador" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES_03",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "origen" },
          { name: "fuente_financ" },
        ]
      },
      {
        name: "ind_sig_techo_pres_04",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
      {
        name: "PK_TECHO_PRESUPUESTAL",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "origen" },
          { name: "fuente_financ" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
