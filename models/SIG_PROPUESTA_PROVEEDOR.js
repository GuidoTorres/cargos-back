const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_PROVEEDOR', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PROMPYME: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SOBRE_NRO1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SOBRE_NRO2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_REQUISITO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_COTIZACION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_COTIZACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.DECIMAL(3,0),
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
    LOCALIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_RNP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DISCAPACIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROPUESTA_PROVEEDOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PROP_PROVEEDOR_02",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "PK_SIG_PROPUESTA_PROVEEDOR",
        unique: true,
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
    ]
  });
};
