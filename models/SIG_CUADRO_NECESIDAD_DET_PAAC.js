const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_NECESIDAD_DET_PAAC', {
    SEC_EJEC_CN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE_CN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO_CN: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA_CN: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO_CN: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_SEC_CN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC_PCC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    ANO_EJE_PCC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID_PCC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID_PCC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION_PCC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_BIEN_PCC: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONSOLID_PCC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_RESUMEN_PCC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_META_PCC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CTRO_COSTO_PCC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      references: {
        model: 'SIG_PAAC_CENTRO_COSTO',
        key: 'TIPO_GENERACION'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_NECESIDAD_DET_PAAC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUADRO_NECESIDAD_DET_PAAC",
        unique: true,
        fields: [
          { name: "SEC_EJEC_CN" },
          { name: "ANO_EJE_CN" },
          { name: "CENTRO_COSTO_CN" },
          { name: "SECUENCIA_CN" },
          { name: "FASE_CUADRO_CN" },
          { name: "ITEM_SEC_CN" },
        ]
      },
    ]
  });
};
