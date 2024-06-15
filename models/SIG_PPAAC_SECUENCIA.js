const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPAAC_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_INICIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_FINAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MES_PROPUESTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPECIF_TECNICA: {
      type: DataTypes.STRING(100),
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
    tableName: 'SIG_PPAAC_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPAAC_SECU_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_CONSOLID" },
          { name: "TIPO_GENERACION" },
        ]
      },
      {
        name: "PK_SIG_PPAAC_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
        ]
      },
    ]
  });
};
