const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_EJECUTORA_AMBITO', {
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
    ID_AMBITO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PPR_AMBITO',
        key: 'ID_AMBITO'
      }
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_EJECUTORA_AMBITO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EJECUTORA_AMBITO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_AMBITO" },
        ]
      },
    ]
  });
};
