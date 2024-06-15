const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_COMPONENTE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DENOMINACION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TASA_DEPRECIACION: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SALDO_VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    SALDO_VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    SEC_COMPONENTE_SUSTITUIR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    UBICACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_MODALIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ADQUISICION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_ALTA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    VALOR_INICIAL_REV_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    DEPREC_ACUMUL_REV_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_INICIAL_REV_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    DEPREC_ACUMUL_REV_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CODIGO_ALTA: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    VALOR_DETERIORO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_SOLES_HIS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_ACUMUL_HIS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VIDA_UTIL_HIS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TASA_DEPRECIACION_HIS: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_ACUMUL_IMPORT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_ACUMUL_COSTO_IMPORT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_ACUMUL_AJUSTE_IMPORT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_INICIAL_COSTO_IMPORT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_INICIAL_AJUSTE_IMPORT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_INI_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_INI_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_IMPORT: {
      type: DataTypes.STRING(1),
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
    COD_FONDO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COD_DIV: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    COD_PROYECTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COD_CONSTRUCCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CODIGO_SINABIP_SEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ANO_EJE_II: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO_II: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_COMPONENTE',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_COMP",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
        ]
      },
      {
        name: "IND_SIG_INM_COMP_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE_SUSTITUIR" },
        ]
      },
      {
        name: "PK_SIG_INM_COMP",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
        ]
      },
    ]
  });
};
