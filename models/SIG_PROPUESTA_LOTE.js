const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_LOTE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_PROPUESTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    PRODUCTO_NACIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PUNTAJE_TECNICO: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO_TECNICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_TECNICO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OFERTA_ECONOMICA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_ECONOMICO: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO_ECONOMICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ECONOMICO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BONIFICACION: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_FINAL: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO_FINAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORDEN_MERITO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ADJUDICADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ADJUDICACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ADJUDICACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_GARANTIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    REQUISITO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_CUADRO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_SIAF: {
      type: DataTypes.STRING(20),
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
    BONIF_LOCALIDAD: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_AUTORIZADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AUTORIZADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_AUTORIZADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOC_AUTORIZADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROPUESTA_LOTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PROP_LOTE_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_PROP_LOTE_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "NRO_LOTE" },
        ]
      },
      {
        name: "PK_SIG_PROPUESTA_LOTE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
          { name: "NRO_LOTE" },
          { name: "PROVEEDOR" },
          { name: "NRO_PROPUESTA" },
        ]
      },
    ]
  });
};
