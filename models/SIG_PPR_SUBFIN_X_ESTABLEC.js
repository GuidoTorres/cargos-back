const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_SUBFIN_X_ESTABLEC', {
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
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_SUBFIN_X_ESTABLEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_SUBFIN_X_ESTABLEC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SUB_FINALIDAD" },
          { name: "SUB_FINALIDAD" },
          { name: "PROGRAMA_INSTITUCIONAL" },
          { name: "COMPONENTE" },
          { name: "COD_ESTABLEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
    ]
  });
};
