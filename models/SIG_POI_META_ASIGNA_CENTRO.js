const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_POI_META_ASIGNA_CENTRO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ASIGNA_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ASIGNA_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ASIGNA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ASIGNA_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ACT_POI: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ASIGNA_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_POI: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MES_META: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    META_FISICA_MES: {
      type: DataTypes.DECIMAL(15,2),
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
    tableName: 'SIG_POI_META_ASIGNA_CENTRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_POI_META_ASIGNA_CENTRO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SEC_ASIGNA" },
          { name: "SEC_ACT_POI" },
          { name: "SEC_META" },
          { name: "TIPO_POI" },
        ]
      },
    ]
  });
};
