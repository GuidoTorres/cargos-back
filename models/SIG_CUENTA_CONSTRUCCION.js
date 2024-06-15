const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUENTA_CONSTRUCCION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
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
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IND_MONTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_PERSONAL: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_BIENES: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_SERVICIOS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_OTROS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_PRESTAMO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_ESTRUCTURA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_PRE_INVERSION: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_EXP_TECNICO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_ES_MONTO_ESTUDIO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_CONSTRUC_RECLASIFICAR: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_CONSTRUC_TRANSFERIR_1: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_CONSTRUC_TRANSFERIR_2: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    IND_CONSTRUC_TRANSFERIR_3: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    TIPO_CUENTA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    SUB_CTA_SUP_REP_1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUENTA_CONSTRUCCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IF_SIG_CONSTRUC_MODALIDAD_CTA",
        fields: [
          { name: "COD_MODALIDAD" },
        ]
      },
      {
        name: "IF_SIG_CONSTRUC_TIPO_CTA",
        fields: [
          { name: "COD_TIPO_CONSTRUC" },
        ]
      },
      {
        name: "IF_SIG_CONSTRUC_TIPO_INM_CTA",
        fields: [
          { name: "CODIGO_TIPO_INM" },
        ]
      },
      {
        name: "PK_SIG_CUENTA_CONSTRUC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
