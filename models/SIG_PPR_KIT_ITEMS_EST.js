const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_KIT_ITEMS_EST', {
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
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
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
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CANT_KITS: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_KITS: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_KIT_ITEMS_EST',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPR_KIT_ITEMS_EST_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_ESTABLEC" },
        ]
      },
      {
        name: "IND_SIG_PPR_KIT_ITEMS_EST_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_KIT" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "IND_SIG_PPR_KIT_ITEMS_EST_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_KIT" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
      {
        name: "PK_SIG_PPR_KIT_ITEMS_EST",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_ESTABLEC" },
          { name: "SEC_KIT" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
