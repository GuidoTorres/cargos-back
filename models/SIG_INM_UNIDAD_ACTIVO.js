const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_UNIDAD_ACTIVO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_INM',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_INM',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TIPO_B: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    AREA_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_TOTAL_CALCULADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    TIPO_BAJA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION_BAJA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_RESOLUCION_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLOSA_BAJA: {
      type: DataTypes.STRING(200),
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
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ANO_BAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_BAJA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MODALIDAD: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
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
    ESTADO_CONSERV_FIN: {
      type: DataTypes.STRING(1),
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
    TIPO_PROCEDENCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUM_PROCEDENCIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_PROCEDENCIA: {
      type: DataTypes.DATE,
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
    tableName: 'SIG_INM_UNIDAD_ACTIVO',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_UND_ACTIVO",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_INM_UND_ACTIVO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
        ]
      },
    ]
  });
};
