const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_REQUISITOS', {
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
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_PROVEEDOR',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_FACTOR: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_REQUISITOS',
        key: 'TIPO_GENERACION'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_PROPUESTA_REQUISITOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PROP_REQU_01",
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
        name: "IND_SIG_PROP_REQUI_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_FACTOR" },
        ]
      },
      {
        name: "PK_SIG_PROPUESTA_REQUISITOS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "PROVEEDOR" },
          { name: "SEC_FACTOR" },
        ]
      },
    ]
  });
};
