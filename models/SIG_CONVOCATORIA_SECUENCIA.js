const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONVOCATORIA_SECUENCIA', {
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
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
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
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'elemento_ciiu',
        key: 'tipo_ciiu'
      }
    },
    CATEGORIA_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'elemento_ciiu',
        key: 'tipo_ciiu'
      }
    },
    GRUPO_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'elemento_ciiu',
        key: 'tipo_ciiu'
      }
    },
    ELEMENTO_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'elemento_ciiu',
        key: 'tipo_ciiu'
      }
    },
    TIPO_ADJUDICACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_SIAF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    MODAL_ADQ_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_ADQ_ALCANCE: {
      type: DataTypes.STRING(2),
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
    MOTIVO_ESTADO: {
      type: DataTypes.STRING(2),
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
    tableName: 'SIG_CONVOCATORIA_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CONV_SECU_02",
        fields: [
          { name: "TIPO_CIIU" },
          { name: "CATEGORIA_CIIU" },
          { name: "GRUPO_CIIU" },
          { name: "ELEMENTO_CIIU" },
        ]
      },
      {
        name: "PK_SIG_CONVOCATORIA_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
        ]
      },
    ]
  });
};
