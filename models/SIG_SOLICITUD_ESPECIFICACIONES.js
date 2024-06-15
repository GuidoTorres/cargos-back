const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SOLICITUD_ESPECIFICACIONES', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ESPECIFICAS_TECNICAS',
        key: 'SEC_ESPEC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_COTIZACION',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_COTIZACION',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_COTIZACION',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_COTIZACION',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_SOLICITUD: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_COTIZACION',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_ESPEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ESPECIFICAS_TECNICAS',
        key: 'SEC_ESPEC'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_SOLICITUD_ESPECIFICACIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SOL_ESPEC_01",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "NRO_SOLICITUD" },
          { name: "SEC_ESPEC" },
        ]
      },
    ]
  });
};
