const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_POI_ACCION_EST_CENTRO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_META_ACCION_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_POI: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      references: {
        model: 'SIG_PEI_META_ACCION_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_OE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_PEI_META_ACCION_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_AE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_PEI_META_ACCION_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_PEI_META_ACCION_EST',
        key: 'SECUENCIA'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    SEC_ASIGNA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ASIGNA: {
      type: DataTypes.STRING(1),
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
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_POI_ACCION_EST_CENTRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_POI_ACCION_EST_CENTRO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SEC_ASIGNA" },
        ]
      },
    ]
  });
};
