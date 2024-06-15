const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SOLICITUD_COTIZACION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_SOLICITUD: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    FECHA_SOLICITUD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    C_USER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO_SOLICITUD: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_COTIZACION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    COD_FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_COTIZA: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SOLICITUD_COTIZACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_SOLI_COTI_02",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "PK_SIG_S_C_01",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "NRO_SOLICITUD" },
        ]
      },
    ]
  });
};
