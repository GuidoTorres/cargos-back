const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVENGADO_DOC_SECU', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_det_DEVENGADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SERIE_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_IGV: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_EXONERADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_RETENCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OTROS_TRIBUTOS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FL_CARGA_RC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    retdet_tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    retdet_codigo_bs: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    retdet_porc: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    retdet_monto: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    retdet_serie_comp: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    retdet_nro_comp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    retdet_fec_pago: {
      type: DataTypes.DATE,
      allowNull: true
    },
    retdet_estado: {
      type: DataTypes.CHAR(1),
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
    base_imponible: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVENGADO_DOC_SECU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_DEVENG_DOC_SECU_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
        ]
      },
      {
        name: "PK_SIG_DEVENGADO_DOC_SECU",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
          { name: "SEC_det_DEVENGADO" },
        ]
      },
    ]
  });
};
