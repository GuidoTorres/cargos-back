const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_SUBFIN_X_CATEG', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_SUBFIN_X_CATEG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SUBFIN_CATEG",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "PROGRAMA" },
          { name: "FINALIDAD" },
          { name: "SUB_FINALIDAD" },
          { name: "CATEGORIA" },
        ]
      },
    ]
  });
};
