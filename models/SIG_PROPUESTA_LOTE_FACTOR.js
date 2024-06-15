const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_LOTE_FACTOR', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_PROPUESTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_LOTE',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROP_FACTOR: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_FACTOR: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    SEC_FACTOR: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NIVEL_01: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NIVEL_03: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NIVEL_02: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NIVEL_04: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    TIPO_EVALUACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CALIFICACION: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO: {
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
    NOMBRE_FACTOR: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    SEC_FACTOR_PADRE: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROPUESTA_LOTE_FACTOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PROP_LOTE_FACT_02",
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
      {
        name: "IND_SIG_PROP_LOTE_FACT_02",
        fields: [
          { name: "TIPO_FACTOR" },
          { name: "SEC_FACTOR" },
          { name: "NIVEL_01" },
          { name: "NIVEL_02" },
          { name: "NIVEL_03" },
          { name: "NIVEL_04" },
        ]
      },
      {
        name: "PK_SIG_PROPUESTA_LOTE_FACTOR",
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
          { name: "SEC_PROP_FACTOR" },
        ]
      },
    ]
  });
};
