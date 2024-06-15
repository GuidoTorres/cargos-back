const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_CTA_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_PPTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_PPTO',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_CUENTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO_D_H: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_ALMA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_CUENTA: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_CTA_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DETALLE_CTA_ALMA_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "SEC_DETALLE" },
          { name: "SEC_PPTO" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_CTA_ALMACEN",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ANO_EJE" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "SEC_DETALLE" },
          { name: "SEC_PPTO" },
          { name: "SEC_CUENTA" },
        ]
      },
    ]
  });
};
