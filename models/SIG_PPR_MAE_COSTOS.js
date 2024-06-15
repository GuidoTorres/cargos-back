const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_MAE_COSTOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    ID_ESTCOSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    FLAG_PADRE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    GENERACN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_MAE_COSTOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_MAE_COSTOS",
        unique: true,
        fields: [
          { name: "ID_ESTCOSTO" },
          { name: "ANO_EJE" },
          { name: "SECTOR" },
        ]
      },
    ]
  });
};
