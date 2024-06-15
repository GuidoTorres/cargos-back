const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_HT_MOVIM_MENSUAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_DEPREC: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_DEPREC: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_DETERIORO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_DETERIORO: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_PERIODO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ACM_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ACM_DEP_INICIAL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ACM_DEP_PERIODO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_BAJAS: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_SALIDA_CPROC: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_SALIDA_SPROC: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_ALTAS: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_BAJA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_EJER_MES_BAJA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_EJERCICIO_ANT: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_ACT_ADM: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_EXCESO_AJUS: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_INICIAL_MES_ANT: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_SALIDA_CPROC: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_SALIDA_SPROC: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_ALTAS: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VDETERIORO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VDETERIORO_SALIDA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VDETERIORO_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_CONCESION_SALIDA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_CONCESION_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_CONCESION_EJERCICIO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    AVALOR_CONCESION_SALIDA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    AVALOR_CONCESION_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    DEUDOR: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ACREEDOR: {
      type: DataTypes.DECIMAL(38,2),
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
    ADEPR_ACTO_EJERCICIO_RETORNO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_BAJAS_DETERIORO: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_ADICION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SUSTITUCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_DEVOLUCION: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    HDEPR_DEVOLUCION: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_DETERIORO_CTA_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_DETERIORO_ACTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_ACTO_SALIDA: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    ADEPR_ACTO_EJERCICIO_ANT: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    },
    VALOR_DISMINUCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MAYOR_DISMINUCION: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_DISMINUCION: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    ADEPR_MEJORA_ADICION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_HT_MOVIM_MENSUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_HT_MOVIM_MENSUAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
          { name: "MAYOR_DEPREC" },
          { name: "SUB_CTA_DEPREC" },
          { name: "MAYOR_DETERIORO" },
          { name: "SUB_CTA_DETERIORO" },
          { name: "SEDE" },
          { name: "MAYOR_DISMINUCION" },
          { name: "SUB_CTA_DISMINUCION" },
        ]
      },
    ]
  });
};
