const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONSTRUCCIONES_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSTRUCCIONES',
        key: 'SEC_EJEC'
      }
    },
    COD_CONSTRUC: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSTRUCCIONES',
        key: 'SEC_EJEC'
      }
    },
    NRO_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COD_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      references: {
        model: 'SIG_MODALIDAD_CONSTRUCCION',
        key: 'COD_MODALIDAD'
      }
    },
    COD_TIPO_CONSTRUC: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_CONSTRUCCION',
        key: 'COD_TIPO_CONSTRUC'
      }
    },
    CODIGO_TIPO_INM: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_INMUEBLE',
        key: 'CODIGO_TIPO_INM'
      }
    },
    MONTO_PROY_PRE_INVERSION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROY_EXP_TECNICO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROY_BIENES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROY_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROY_SERVICIOS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROY_OTROS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_APROBADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_BIENES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_SERVICIOS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_OTROS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_PRESTAMO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_ESTRUCTURA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_ADELANTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_APROBADA_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_PERSONAL_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_BIENES_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_SERVICIOS_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_OTROS_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_PRESTAMO_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OBRA_ESTRUCTURA_FIN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    NOMBRE_CONTRATISTA: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    NOMBRE_SUPERVISOR: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    FECHA_AMPLIA_PLAZO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UBICACION_FISICA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    COD_TIPO_CONCLUIR: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    COD_TIPO_DESTINO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FECHA_PROC_CONCLUSION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESPONSABLE_CONCLUSION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DOCUMENTO_CONCLUSION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_DOCUM_CONCLUSION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MAYOR_INICIAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_INICIAL: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_RECLASIF_TRANSF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_RECLASIF_TRANSF: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_TERRENO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_TERRENO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VALOR_RECLASIF_TRANSF: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    AREA_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    FECHA_LIQUIDACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ALTA_OBRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_FINAL_OBRA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    RESPONSABLE_LIQUIDACION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DOCUMENTO_LIQUIDACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_DOCUM_LIQUIDACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SECUENCIA_INMUEBLE: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    CODIGO_UNIDAD_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_LIQUIDACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBS_LIQUIDACION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    MAYOR_INMUEBLE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_INMUEBLE: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONSTRUCCIONES_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IF_SIG_CONSTRUC_DET_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CONSTRUC" },
        ]
      },
      {
        name: "IF_SIG_CONSTRUC_MODALIDAD_DET",
        fields: [
          { name: "COD_MODALIDAD" },
        ]
      },
      {
        name: "IF_SIG_CONSTRUC_TIPO_DET",
        fields: [
          { name: "COD_TIPO_CONSTRUC" },
        ]
      },
      {
        name: "IF_SIG_CONSTRUC_TIPO_INM_DET",
        fields: [
          { name: "CODIGO_TIPO_INM" },
        ]
      },
      {
        name: "PK_SIG_CONSTRUC_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CONSTRUC" },
          { name: "NRO_CODIGO" },
        ]
      },
    ]
  });
};
