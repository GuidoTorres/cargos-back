const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONVOCATORIA_CALENDARIO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CALENDARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA_CALENDA_CAB',
        key: 'TIPO_GENERACION'
      }
    },
    CALENDARIO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_INICIAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FINAL: {
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
    DOC_PRORROGA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_PRORROGA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IND_PRORROGA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_CONVOCATORIA_CALENDARIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONVOCATORIA_CALENDARIO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CALENDARIO" },
          { name: "CALENDARIO" },
        ]
      },
    ]
  });
};
