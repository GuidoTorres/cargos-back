const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_CATEGORIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRE_CORTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ID_AMBITO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      references: {
        model: 'SI_PPR_AMBITO',
        key: 'ID_AMBITO'
      }
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_CATEGORIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CATEGORIA_PPR",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CATEGORIA" },
          { name: "SECTOR_AMBITO" },
        ]
      },
    ]
  });
};
