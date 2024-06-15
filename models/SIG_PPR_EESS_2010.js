const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_EESS_2010', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    DESC_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TIPO_ESTABLEC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_INTERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CAD_OPERATIVA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UBIGEO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    COD_HIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_OGEI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_SISMED: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_SIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_EESS_2010',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_EESS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_ESTABLEC" },
        ]
      },
    ]
  });
};
