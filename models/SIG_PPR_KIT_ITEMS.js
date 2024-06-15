const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_KIT_ITEMS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PPR_KIT_ITEMS',
        key: 'SEC_KIT'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_ejecutora',
        key: 'sec_ejec'
      }
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PPR_KIT_ITEMS',
        key: 'SEC_KIT'
      }
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPR_CATEGORIA',
        key: 'SECTOR_AMBITO'
      }
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PPR_KIT_ITEMS',
        key: 'SEC_KIT'
      }
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPR_CATEGORIA',
        key: 'SECTOR_AMBITO'
      }
    },
    FLAG_SUGERIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FLAG_RETIRAR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_KIT_ITEMS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_KIT_ITEMS",
        unique: true,
        fields: [
          { name: "SEC_KIT" },
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "CATEGORIA" },
          { name: "SECTOR_AMBITO" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
